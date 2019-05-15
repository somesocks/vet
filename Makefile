TASKS=./tasks


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


##		make build - make a new build
##
build: build-src build-docs build-meta


build-src:
	sh $(TASKS)/build-src.sh

build-docs:
	sh $(TASKS)/build-docs.sh

build-meta: build-src build-docs
	sh $(TASKS)/build-meta.sh

##		make test - run the test cases against the build
##
test: test-mocha test-eslint

test-eslint:
	ESLINT="$(ESLINT)" sh $(TASKS)/test-eslint.sh

test-mocha:
	MOCHA="$(MOCHA)" sh $(TASKS)/test-mocha.sh



##		make package-check - print out a pre-publish package check
##
package-check:
	sh $(TASKS)/package-check.sh

##		make package-publish - publish package on npm
##
package-publish:
	sh $(TASKS)/package-publish.sh

##
##
