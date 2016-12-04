# Nunjucks Starter Kit

## Requirement
- Node: [https://nodejs.org/en/download](https://nodejs.org/en/download)

### How to start
1. download & unzip: [https://github.com/wzulfikar/nunjucks-starter-kit/archive/master.zip](https://github.com/wzulfikar/nunjucks-starter-kit/archive/master.zip)
- install dependencies: run `npm i`
- run `gulp auto`
- try change something inside `src/pages` & your browser will auto-reload, displaying the change you just made.

<iframe width="420" height="315"
src="https://youtu.be/H7_yhCvQJDk?autoplay=1">
</iframe>

---

# Why?
- works out of the box! 
- example included: 
  - `src/pages` for page content
  - `src/templates` for page layout
- output is plain html (stored in `dist` directory)
- serverless
- can use free service like surge.sh, github pages for hosting
- minimum knowledge needed: html, css, js – no need for php, ruby, etc.

## Directory Layout
Here is the project structure:

- `dist` : this directory contains real files that will be hosted
- `dist/assets` : all css, js, images, fonts and whatever assets related to app are located here
- `src` : raw files used to develop the app
- `src/pages` : pages for the app, everything here will be rendered to `dist` directory
- `src/templates` : layout files
- `src/templates/partials` : partial files like nav, user-tabs, menu, etc

## Sample workflow
A. without auto-render

1. edit pages in src
- run `gulp`
- publish `dist` to hosting provider


B. with auto-render

1. run `gulp watch`
- as you edit src, dist gulp watch will do the rendering behind the scene n updates dist directory: you need to reload your browser to see the changes
- publish dist to hosting provider


C. with auto-render & auto-reload (via browsersync)

1. run `gulp auto`
- it will open `http://localhost:3000` in your browser
- using this workflow, when you edit `src` the `dist` will be updated (just like workflow B) and your browser (`http://localhost:3000`) will be reloaded automatically.


---

Nunjucks official docs: [https://mozilla.github.io/nunjucks/]()
