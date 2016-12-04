# Nunjucks Starter Kit

## Requirements
- Node: [https://nodejs.org/en/download]()

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

### How to start
1. Get latest version
  - using git:
  - download raw
- Run gulp
- example is using bootstrap

# Why?
- no need server
- npm is the only requirement
- output is plain html
- can use free service like surge.sh
- https://pages.github.com


## sample workflow
A. without auto-render

1. edit pages in src
- run `gulp`
- publish `dist` to hosting provider

*video here*


B. with auto-render

1. run `gulp watch`
- as you edit src, dist gulp watch will do the rendering behind the scene n updates dist directory
- publish dist to hosting provider

*video here*

C. with auto-render & auto-reload (via browsersync)

1. run `gulp auto`
- it will open `http://localhost:3000` in your browser
- using this workflow, when you edit `src` the `dist` will be updated (just like workflow B) and your browser (`http://localhost:3000`) will be reloaded automatically.

*video here*

# Common Tasks
### Gulp
- `gulp`
- `gulp watch`

### Git
- `git pull`: fetch latest update of source code & implement it in local machine
- `git add .`: record all changes in current directory
- `git commit -m "message here"`: commit recorded changes
- `git push`: push all committed changes to remote repository so other developers can see the changes & follow up when necessary

---

after cloning the code, you may want to try rendering the pages. first, install node: [https://nodejs.org/en/download]() and then, change any file inside `src/pages`. open your node and run `gulp`. your changes should reflect in `dist` directory.