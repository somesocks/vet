# `build-docs` finds all src js files,
# sorts them for a stable result,
# and pipes the filenames into jsdoc2md to generate
# a README.md

# expects to be run from root
ROOT_DIR=.
SRC_DIR=$ROOT_DIR/src
DIST_DIR=$ROOT_DIR/dist

# add local node_modules bin to path
NODE_BIN=$ROOT_DIR/node_modules/.bin
PATH=$PATH:$NODE_BIN

( \
	find \
		$SRC_DIR \
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
