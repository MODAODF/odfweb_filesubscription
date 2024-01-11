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

apppackage: clean buildjs
	mkdir -p $(target_dir)
	rsync -a \
	--exclude=.git \
	--exclude=.github \
	--exclude=build \
	--exclude=.gitignore \
	--exclude=.travis.yml \
	--exclude=.scrutinizer.yml \
	--exclude=CONTRIBUTING.md \
	--exclude=composer.json \
	--exclude=composer.lock \
	--exclude=composer.phar \
	--exclude=.tx \
	--exclude=l10n/no-php \
	--exclude=Makefile \
	--exclude=nbproject \
	--exclude=screenshots \
	--exclude=phpunit*xml \
	--exclude=tests \
	--exclude=vendor/bin \
	--exclude=node_modules \
	--exclude=package-lock.json \
	--exclude=package.json \
	--exclude=postcss.config.js \
	--exclude=src \
	--exclude=tsconfig.json \
	--exclude=vendor \
	--exclude=webpack.* \
	--exclude=issue_template.md \
	--exclude=krankerl.toml \
	--exclude=mkdocs.yml \
	$(project_dir) $(target_dir)
	tar -czf $(target_dir)/$(app_name)-$(app_version).tar.gz \
		-C $(target_dir) $(app_name)
