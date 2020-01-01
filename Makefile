
NPM=pnpm

TASKS=./tasks

##
##
##	vet
##
##

default: help

##		make help - display the help
##
help:
	@ grep "^##.*" ./Makefile

##

##		make clean -
##
clean:
	@ sh $(TASKS)/clean.sh


##		make setup - install dependencies for the package
##
setup:
	@ bash $(TASKS)/setup.bash

##		make build - build the src and the docs
##
build: setup
	@ bash $(TASKS)/build.bash

##		make build-dev - build the src
##
build-dev: setup build

##		make test - run all tests
##		- use MOCHA to pass args to mocha,
##		  e.g. `make test MOCHA="--bail"`
##
test: test-eslint test-typescript test-mocha

##		make test-typescript - run the typescript test cases
test-typescript: setup build
	@ sh $(TASKS)/test-typescript.sh

##		make test-mocha - run the mocha test cases
##		- use MOCHA to pass args to mocha,
##		  e.g. `make test-mocha MOCHA="--bail"`
##
test-mocha: setup build
	@ MOCHA="$(MOCHA)" sh $(TASKS)/test-mocha.sh

##		make test-eslint - run the eslint test cases
##
test-eslint: setup build
	@ sh $(TASKS)/test-eslint.sh


##		make package-check - print out a pre-publish package check
##
package-check:
	@ sh $(TASKS)/package-check.sh

##		make package-publish - publish package on npm
##
package-publish:
	@ sh $(TASKS)/package-publish.sh

##
##

##
##
