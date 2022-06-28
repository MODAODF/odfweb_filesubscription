# Makefile for building the project

app_name=filesubscription
dir_name=$(shell basename $(CURDIR))
project_dir=$(CURDIR)/../$(app_name)
buildjs_dist=$(CURDIR)/js/dist
target_dir=$(CURDIR)/build
app_version=0.0.1

clean:
	rm -fr $(buildjs_dist)
	rm -fr $(target_dir)

dev: clean
	node node_modules/handlebars/bin/handlebars -n OCA.FileSubscription.Templates src/templates -f js/templates.js
	npm run dev

buildjs: clean
	node node_modules/handlebars/bin/handlebars -n OCA.FileSubscription.Templates src/templates -f js/templates.js
	npm ci
	npm run build

appstore: clean buildjs
	mkdir -p $(target_dir)
	tar cvzf $(target_dir)/$(app_name)-$(app_version).tar.gz ../$(dir_name) \
	--exclude=babel.config.json \
	--exclude=.babelrc \
	--exclude=build \
	--exclude=.eslintignore \
	--exclude=.eslintrc.js \
	--exclude=.git \
	--exclude=.gitignore \
	--exclude=Makefile \
	--exclude=package.json \
	--exclude=package-lock.json \
	--exclude=src \
	--exclude=stylelint.config.js \
	--exclude=webpack.common.js \
	--exclude=webpack.dev.js \
	--exclude=webpack.prod.js \
