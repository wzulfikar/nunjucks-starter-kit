// gulpfile.js
const { src, dest, watch, series } = require("gulp");

(browserSync = require("browser-sync").create()),
  (htmlmin = require("gulp-htmlmin")),
  (nunjucksRender = require("gulp-nunjucks-render")); // importing the plugin

const PATHS = {
  output: "dist",
  templates: "src/templates",
  pages: "src/pages",
};

// writing up the gulp nunjucks task
function nunjucks() {
  console.log("Rendering nunjucks files..");
  return src(PATHS.pages + "/**/*.+(html|js|css)")
    .pipe(
      nunjucksRender({
        path: [PATHS.templates],
        watch: true,
      })
    )
    .pipe(dest(PATHS.output));
}

async function browser() {
  await browserSync.init({
    server: {
      baseDir: PATHS.output,
    },
  });
}

function watching() {
  // trigger Nunjucks render when pages or templates changes
  watch(PATHS.pages + "/**/*.+(html|js|css)", nunjucks);
  watch(PATHS.templates + "/**/*.+(html|js|css)", nunjucks);

  // reload browsersync when `dist` changes
  watch(PATHS.output + "/*").on("change", browserSync.reload);
}

function minify() {
  return src(PATHS.output + "/*.html")
    .pipe(
      htmlmin({
        collapseWhitespace: true,
        cssmin: true,
        jsmin: true,
        removeOptionalTags: true,
        removeComments: false,
      })
    )
    .pipe(src(PATHS.output));
}

exports.nunjucks = nunjucks;
exports.watching = watching;
exports.default = series(browser, watching);
