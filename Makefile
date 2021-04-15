# Makefile for building the project

app_name=filesubscription
buildjs_dir=$(CURDIR)/js

clean:
	rm -fr $(buildjs_dir)

dev: clean
	npm run dev

buildjs: clean
	npm ci
	npm run build
