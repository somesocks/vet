
NPM=pnpm

.PHONY: help build test

##
##
##	vet
##		this is the base project makefile
##
##

default: help

##	COMMANDS
##

##		make help - display the help
##
help:
	@grep "^##.*" ./Makefile


dist-dir:
	mkdir -p ./dist

build-src: dist-dir
	$(NPM) run _task_build_src

build-docs:
	$(NPM) run _task_build_docs

##		make build - make a new build
##
build: build-docs build-src
	cp ./.npmignore ./dist
	cp ./package.json ./dist
	cp ./README.md ./dist
	cp ./LICENSE ./dist
	cp -r ./dist_v1/ ./dist/dist/

test-cases:
	$(NPM) run _task_test_cases

##		make test - run the test cases against the build
##
test: test-cases


##		make package-check - list the files that will be present in the package
##
package-check:
	cd ./dist && $(NPM) publish --dry-run

##		make package-publish - publish the current dist dir
##
package-publish:
	cd ./dist && $(NPM) publish --access=public
