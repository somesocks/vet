SRC_DIR=./src
DIST_DIR=./dist

( \
	export NODE_PATH=./; \
	find $DIST_DIR -name '*.tests.js' \
	| xargs mocha --timeout 10000 $(ARGS) \
)
