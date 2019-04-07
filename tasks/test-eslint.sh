# `test-eslint` runs eslint against the source code

# expects to be run from root
ROOT_DIR=.
SRC_DIR=$ROOT_DIR/src
DIST_DIR=$ROOT_DIR/dist

# add local node_modules bin to path
NODE_BIN=$ROOT_DIR/node_modules/.bin
PATH=$PATH:$NODE_BIN

eslint \
 	$SRC_DIR \
	--quiet \
	$ESLINT
