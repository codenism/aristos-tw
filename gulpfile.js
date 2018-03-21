var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    less = require('gulp-less'),
    cssmin = require('gulp-cssmin'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

gulp.task('minjs', function () {
  gulp.src('./src/js/*.js')
  	.pipe(jshint())
    .pipe(jshint.reporter('default'))	
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./src/build/js'))
    .pipe(reload({stream:true}))
});

gulp.task('less', function () {
    gulp.src('./src/less/styles.less')
        .pipe(plumber())
        .pipe(less())
        .pipe(gulp.dest('./src/less/'))
        .pipe(cssmin())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./src/build/styles'))
        .pipe(reload({stream:true}))
});
gulp.task('html', function () {
	gulp.src('./src/*.html')
		.pipe(reload({stream:true}))
});
gulp.task('browserSync', function() {
  browserSync({
		 server: {
		 baseDir: 'src'
	 },
	 notify: false
  });
});
gulp.task('watch', ['browserSync', 'less', 'minjs', 'html'], function() {
	gulp.watch('src/*.html', ['html']);
    gulp.watch('src/less/*.less', ['less']);
    gulp.watch('src/js/*.js', ['minjs']);
});