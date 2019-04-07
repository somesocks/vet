# `build-src` uses rsync
# to update the dist dir from the src dir

# expects to be run from root
ROOT_DIR=.
SRC_DIR=$ROOT_DIR/src
DIST_DIR=$ROOT_DIR/dist

NODE_BIN=$ROOT_DIR/node_modules/.bin
PATH=$PATH:$NODE_BIN

NPM=pnpm


cd $DIST_DIR && $NPM publish
