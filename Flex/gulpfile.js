var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var concatCss = require('gulp-concat-css');
var uglifyCss = require('gulp-uglifycss');

gulp.task('sass', function() {
    return gulp.src('components/scss/app.scss')
        .pipe(sass())
        .pipe(uglifyCss())
        .pipe(gulp.dest('assets/css/'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('watch', ['browserSync', 'sass'], function() {
    gulp.watch('components/scss/**/*.scss', ['sass']);
    gulp.watch('index.html', browserSync.reload);
});

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
});