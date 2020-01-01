#!/bin/bash

#
# turn this on to debug script
# set -x

#
# abort on error
set -e

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

# expect PACKAGE_NAME to be defined
PACKAGE_NAME=$PACKAGE_NAME
SOURCE_HASH_FILE=SOURCE_HASH


SHOULD_REBUILD=1

echo ""
echo "[INFO] starting build check for $PACKAGE_NAME"

_makeSourceHash() {
	echo "[INFO] calculating source hash for $PACKAGE_NAME";
	SOURCE_HASH=`find $ROOT_DIR \
		\( -type f -and -path "$SRC_DIR/*" \) -or \
		\( -type f -and -name 'tsconfig.json' \) \
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

_checkSourceHash() {
	echo "[INFO] verifying source hash against build";
	if [ -f $DIST_DIR/$SOURCE_HASH_FILE ]
	then
		DIST_SOURCE_HASH=$(cat $DIST_DIR/$SOURCE_HASH_FILE);
		# echo "[INFO] dist source hash $DIST_SOURCE_HASH";
		if [ "$SOURCE_HASH" == "$DIST_SOURCE_HASH" ]
		then
			echo "[INFO] source hash '$SOURCE_HASH' is equal to dist source hash '$DIST_SOURCE_HASH'";
			SHOULD_REBUILD=0;
		else
			echo "[INFO] source hash '$SOURCE_HASH' is not equal to dist source hash '$DIST_SOURCE_HASH'";
			SHOULD_REBUILD=1;
		fi
	else
		SHOULD_REBUILD=1;
	fi
}

_makeBuildDir () {
	#
	# make a temporary build dir
	# this command is linux / osx agnostic
	# https://unix.stackexchange.com/questions/30091/fix-or-alternative-for-mktemp-in-os-x
	echo "[INFO] creating temporary build dir"
	BUILD_DIR=''
	BUILD_DIR=`mktemp -d 2>/dev/null || mktemp -d -t 'build-dir'`
}

_unmakeBuildDir () {
	#
	# clean up build dir
	echo "[INFO] removing temporary build dir"
	rm -rf $BUILD_DIR
}

_buildTSC () {
	#
	# build typescript into temp dir
	echo "[INFO] compiling TS into build dir"
	(tsc \
		--outDir "$BUILD_DIR"
		--noEmitOnError false \
	) > /dev/null 2>&1 || true
}

_buildJS () {
	#
	# copy src/**/*.js into temp dir
	echo "[INFO] copying JS into build dir"
	rsync \
		--update \
		--recursive \
		--exclude='*.ts' \
		$SRC_DIR/ \
		$BUILD_DIR
		# --include='*.js' \
		# --itemize-changes \
}

_buildDocs () {
	( \
		find \
			$BUILD_DIR \
			-name "*.js" \
		| \
		sort \
			--stable \
			--ignore-case \
			--field-separator=/ \
			--key=2.2 \
			--key=2.1 \
		| \
		xargs \
			jsdoc2md \
				--separators \
				--param-list-format list \
				--property-list-format list \
				--member-index-format list \
				--template $ROOT_DIR/README.hbs \
				--files \
	) > $ROOT_DIR/README.md
}

_buildExtras () {
	echo ''
	echo "$SOURCE_HASH" > $BUILD_DIR/$SOURCE_HASH_FILE
	cp $ROOT_DIR/.npmignore $BUILD_DIR/
	cp $ROOT_DIR/package.json $BUILD_DIR/
	cp $ROOT_DIR/LICENSE $BUILD_DIR/
	cp $ROOT_DIR/README.md $BUILD_DIR/
}

_writeBuildToDist () {
	#
	# use rsync to fast-sync the dist dir with the build dir
	echo "[INFO] writing build to dist"
	rsync \
		--update \
		--recursive \
		--delete \
		$BUILD_DIR/ \
		$DIST_DIR
		# --itemize-changes \
}

_cleanup () {
	_unmakeBuildDir || true
	echo ""
}

_makeSourceHash
_checkSourceHash

if [ $SHOULD_REBUILD == 1 ]
then
	echo "[INFO] starting build for ($PACKAGE_NAME)"
	trap _cleanup ERR EXIT
	_makeBuildDir
	_buildJS
	_buildTSC
	_buildDocs
	_buildExtras
	_writeBuildToDist
	echo "[INFO] build for ($PACKAGE_NAME) finished!"
else
	echo "[INFO] ($PACKAGE_NAME) build is up-to-date, exiting"
	echo ""
fi
