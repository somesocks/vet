
.PHONY: help build test


help:
	@echo "Makefile for simple-validator"
	@echo "	make build - make a new build"
	@echo "	make test - run the test cases against the build"
	@echo " make docs - build the docs"

build:
	mkdir -p ./dist
	NODE_MODULES=. webpack --config=./webpack.js

test:
	(export NODE_PATH=./; find ./src -name '*.tests.js' | xargs mocha --timeout 10000 $(ARGS))

docs:
	(export NODE_PATH=./; find ./src -name '*.js' |sort -t'/' -k2.2 -k2.1 | xargs jsdoc2md --template README.hbs --files ) > README.md
