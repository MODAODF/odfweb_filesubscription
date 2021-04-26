# Makefile for building the project

app_name=filesubscription
buildjs_dist=$(CURDIR)/js/dist

clean:
	rm -fr $(buildjs_dist)

dev: clean
	node node_modules/handlebars/bin/handlebars -n OCA.FileSubscription.Templates src/templates -f js/templates.js
	npm run dev

buildjs: clean
	npm ci
	npm run build
