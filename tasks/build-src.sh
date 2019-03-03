SRC_DIR=./src
DIST_DIR=./dist

rsync \
	--update \
	--recursive \
	--delete \
	$SRC_DIR/ $DIST_DIR
