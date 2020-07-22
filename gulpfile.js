const gulp = require('gulp'),
    scssToCss = require('./gulp/scss-to-css');

const watchPath = {
    styles: 'src/styles/*.scss'
}

const build = gulp.series(scssToCss);

function watchFiles() {
    gulp.watch(watchPath.styles, build);
}

exports.build = build;
exports.watch = watchFiles;