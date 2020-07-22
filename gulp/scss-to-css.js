const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCss = require('gulp-clean-css');

module.exports = function styles() {
    return gulp.src('src/styles/main.scss')
        .pipe(sass())
        .pipe(cleanCss())
        .pipe(gulp.dest('build/css'));
}