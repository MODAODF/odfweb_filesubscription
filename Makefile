# Makefile for building the project

app_name=filesubscription
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
	tar cvzf $(target_dir)/$(app_name)-$(app_version).tar.gz ../$(app_name) \
	--exclude=.git \
	--exclude=.github \
	--exclude=build \
	--exclude=logFiles \
	--exclude=node_modules \
	--exclude=.gitignore \
	--exclude=Makefile \

	# $(project_dir) $(target_dir)
	# tar -czf $(target_dir)/$(app_name)-$(version).tar.gz
	# 	-C $(target_dir) $(app_name)
