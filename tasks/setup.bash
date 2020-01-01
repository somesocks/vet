
#
# expects to be run from root
ROOT_DIR=.
SRC_DIR=$ROOT_DIR/src
DIST_DIR=$ROOT_DIR/dist
TASKS_DIR=$ROOT_DIR/tasks

#
# add local node_modules bin to path
NODE_MODULES=$ROOT_DIR/node_modules
NODE_BIN=$NODE_MODULES/.bin
PATH=$NODE_BIN:$PATH

. $TASKS_DIR/_common.sh

PACKAGE_NAME=$PACKAGE_NAME # expect PACKAGE_NAME to be defined
PACKAGE_HASH=""
PACKAGE_HASH_FILE=$NODE_MODULES/.PACKAGE_HASH

SHOULD_INSTALL=1

echo ""
echo "[INFO] starting setup check for $PACKAGE_NAME"

_BUILD_PACKAGE_HASH() {
	echo "[INFO] calculating package hash for $PACKAGE_NAME";
	PACKAGE_HASH=`find $ROOT_DIR \
		\( -type f -and -path "./package.json" \) -or \
		\( -type f -and -path './pnpm-lock.yaml' \) -or \
		\( -type f -and -path './.npmrc' \) \
		| \
		sort \
			--stable \
			--ignore-case \
			--field-separator=/ \
			--key=2.2 \
			--key=2.1 \
		| \
		xargs \
			md5sum  \
		| \
		md5sum `
	# echo "[INFO] source hash $SOURCE_HASH";
}

_VERIFY_PACKAGE_HASH() {
	echo "[INFO] verifying package hash against hash file";
	if [ -f $PACKAGE_HASH_FILE ]
	then
		SAVED_PACKAGE_HASH=$(cat $PACKAGE_HASH_FILE);
		if [ "$PACKAGE_HASH" == "$SAVED_PACKAGE_HASH" ]
		then
			echo "[INFO] package hash '$PACKAGE_HASH' is equal to saved package hash '$SAVED_PACKAGE_HASH'";
			SHOULD_INSTALL=0;
		else
			echo "[INFO] package hash '$PACKAGE_HASH' is not equal to saved package hash '$SAVED_PACKAGE_HASH'";
			SHOULD_INSTALL=1;
		fi
	else
		echo "[INFO] saved package hash not found, re-installing";
		SHOULD_INSTALL=1;
	fi
}

_INSTALL () {
	pnpm install
}

_SAVE_PACKAGE_HASH () {
	echo "$PACKAGE_HASH" > $PACKAGE_HASH_FILE
}

_CLEANUP () {
	echo ""
}




_BUILD_PACKAGE_HASH
_VERIFY_PACKAGE_HASH

if [ $SHOULD_INSTALL == 1 ]
then
	echo "[INFO] starting package install for ($PACKAGE_NAME)"
	trap _CLEANUP ERR EXIT
	_INSTALL
	_BUILD_PACKAGE_HASH
	_SAVE_PACKAGE_HASH
	echo "[INFO] package install for ($PACKAGE_NAME) finished!"
else
	echo "[INFO] ($PACKAGE_NAME) packages are up-to-date, exiting"
	echo ""
fi
