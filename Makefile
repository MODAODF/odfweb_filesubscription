# Makefile for building the project

app_name=filesubscription
dir_name=$(shell basename $(CURDIR))
project_dir=$(CURDIR)/../$(app_name)
buildjs_dir=$(CURDIR)/js
target_dir=$(CURDIR)/build
app_version=1.0.3

clean:
	rm -fr $(buildjs_dir)
	rm -fr $(target_dir)

dev: clean
	npm run dev
	node node_modules/handlebars/bin/handlebars -n OCA.FileSubscription.Templates src/templates -f $(buildjs_dir)/$(app_name)-templates.js

buildjs:clean
	npm ci
	npm run build
	node node_modules/handlebars/bin/handlebars -n OCA.FileSubscription.Templates src/templates -f $(buildjs_dir)/$(app_name)-templates.js

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
	--exclude=node_modules \
