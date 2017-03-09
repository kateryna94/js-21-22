var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var pump = require('pump');

gulp.task('sass', function() {
    return gulp.src('app/sass/**/*.+(scss|sass)')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
});

gulp.task('scripts', function() {
  return gulp.src('app/js/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('app/js/src/'));
});

gulp.task('compress', function (cb) {
  pump([
        gulp.src('app/js/src/all.js'),
        uglify(),
        gulp.dest('dist')
    ],
    cb
  );
});

gulp.task('mincss', function() {
    gulp.src('app/css/*.css')
        .pipe(cssmin())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', ['browser-sync', 'sass', 'mincss', 'scripts', 'compress'], function() {
    gulp.watch('app/sass/**/*.+(scss|sass)', ['sass']);
    gulp.watch('app/js/**/*.js', ['scripts']);
    gulp.watch('app/css/*.css', ['mincss']);
    gulp.watch('app/js/src/all.js', ['compress']);
});
