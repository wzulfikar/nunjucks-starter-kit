# Nunjucks Starter Kit

## Requirement
- Node: [https://nodejs.org/en/download]()

### How to start
- download & unzip: [https://github.com/wzulfikar/nunjucks-starter-kit/archive/master.zip](https://github.com/wzulfikar/nunjucks-starter-kit/archive/master.zip)
- install dependencies: run `npm i`
- run `gulp auto`
- try change something inside `src/pages` & your browser will auto-reload, displaying the change you just made.

---

- we use nunjucks as HTML Template Engine. official docs: [https://mozilla.github.io/nunjucks/]()
- you need gulp to render the templates
- run `gulp` in terminal to render files
- to do auto-render when file changes, run `gulp watch`

# Directory Layout
Before you start, take a moment to see how the project structure looks like:

- `dist` : this directory contains real files that will be hosted
- `dist/assets` : all css, js, images, fonts and whatever assets related to app are located here
- `src` : raw files used to develop the app
- `src/pages` : pages for the app, everything here will be rendered to `dist` directory
- `src/templates` : layout files
- `src/templates/partials` : partial files like nav, user-tabs, menu, etc

# Why?
- works out of the box! 
- output is plain html
- serverless
- can use free service like surge.sh, github pages
- knowledge needed: html, css, js. no need for php, ruby, etc. just plain html, css & js.

## sample workflow
A. without auto-render

1. edit pages in src
- run `gulp`
- publish `dist` to hosting provider

*video here*


B. with auto-render

1. run `gulp watch`
- as you edit src, dist gulp watch will do the rendering behind the scene n updates dist directory: you need to reload your browser to see the changes
- publish dist to hosting provider

*video here*

C. with auto-render & auto-reload (via browsersync)

1. run `gulp auto`
- it will open `http://localhost:3000` in your browser
- using this workflow, when you edit `src` the `dist` will be updated (just like workflow B) and your browser (`http://localhost:3000`) will be reloaded automatically.

*video here*