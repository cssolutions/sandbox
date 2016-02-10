'use strict';
var gulp = require('gulp'); 

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass =   require('gulp-sass');
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
var uglify =  require('gulp-uglify');
var rename = require('gulp-rename');



// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src(['public/sass/*.scss'])
        .pipe(sass().on('error', sass.logError))
	//.pipe(concat('sass.css'))
        .pipe(gulp.dest('public/css'));
	//.pipe(cssmin())
	//.pipe(rename({suffix: '.min'}))
	//.pipe(gulp.dest('public'));
	
});

gulp.task('css', function () {
	return gulp.src(['public/css/*.css'])
		.pipe(concat('all.css'))
		.pipe(gulp.dest('public'))
		.pipe(cssmin())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('public'));
});

gulp.task('scripts', function() {
    return gulp.src(['public/js/*.js'])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('public'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('public/sass/*.scss', ['sass']);
    gulp.watch('public/css/*.css', ['css']);
    gulp.watch('public/js/*.js', ['scripts']);
});

// Default Task
gulp.task('default', ['sass', 'css', 'scripts', 'watch']);