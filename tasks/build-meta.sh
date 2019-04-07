# `build-src` uses rsync
# to update the dist dir from the src dir

# expects to be run from root
ROOT_DIR=.
SRC_DIR=$ROOT_DIR/src
DIST_DIR=$ROOT_DIR/dist

NODE_BIN=$ROOT_DIR/node_modules/.bin
PATH=$PATH:$NODE_BIN

cp $ROOT_DIR/.npmignore $DIST_DIR/
cp $ROOT_DIR/package.json $DIST_DIR/
cp $ROOT_DIR/LICENSE $DIST_DIR/
cp $ROOT_DIR/README.md $DIST_DIR/
cp -r $ROOT_DIR/dist_v1/ $DIST_DIR/dist/
