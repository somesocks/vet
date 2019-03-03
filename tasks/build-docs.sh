SRC_DIR=./src
README_TEMPLATE=./README.hbs
README_OUTPUT=./README.md

( \
	export NODE_PATH=./; \
	find $SRC_DIR -name '*.js' | \
	sort -t'/' -k2.2 -k2.1 |  \
	xargs jsdoc2md \
		--template $README_TEMPLATE \
		--separators \
		--param-list-format list \
		--property-list-format list \
		--member-index-format list \
		--files \
) > $README_OUTPUT
