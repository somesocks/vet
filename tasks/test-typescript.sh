#!/bin/bash

# echo on, for debugging
# set -x

# abort on error
set -e

# expects to be run from root
ROOT_DIR=.
SRC_DIR=$ROOT_DIR/src
DIST_DIR=$ROOT_DIR/dist
TASKS_DIR=$ROOT_DIR/tasks

# add local node_modules bin to path
NODE_MODULES=$ROOT_DIR/node_modules
NODE_BIN=$NODE_MODULES/.bin
PATH=$NODE_BIN:$PATH

# import variables from common
. $TASKS_DIR/_common.sh

# expect PACKAGE_NAME to be defined
PACKAGE_NAME=$PACKAGE_NAME


echo ""

_testTS () {
	#
	# build typescript into temp dir
	echo "[INFO] test-compiling TS"
	tsc \
		--outDir "$DIST_DIR" \
		--noEmit false
	echo "[INFO] test compile passed!"
}

_testTS
