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
    return gulp.src(['public/sass/*.scss',
							'public/vendor/font-awesome/scss'
						  ])
        .pipe(sass().on('error', sass.logError))
	//.pipe(concat('sass.css'))
        .pipe(gulp.dest('public/css'));
	//.pipe(cssmin())
	//.pipe(rename({suffix: '.min'}))
	//.pipe(gulp.dest('public'));
	
});

gulp.task('css', function () {
	return gulp.src(['public/css/*.css',
						  'public/vendor/jquery-ui/themes/start/jquery-ui.css',
						  'public/vendor/bootstrap-material-design/dist/css/bootstrap-material-design.css',
						  'public/vendor/bootstrap-material-design/dist/css/ripples.css',
						  'public/vendor/summernote/dist/summernote.css',
						  'public/vendor/fullcalendar/dist/fullcalendar.css',
						  'vendor/datatables/media/css/dataTables.bootstrap.css',
						  'public/vendor/angular-datetime-picker-ByGiro/dist/angular-datetime-picker-ByGiro.css'
						 ])
		.pipe(concat('all.css'))
		.pipe(gulp.dest('public'))
		.pipe(cssmin())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('public'));
});

gulp.task('scripts', function() {
    return gulp.src(['public/vendor/jquery/dist/jquery.js',
							'public/vendor/jquery-ui/jquery-ui.js',
							'public/vendor/bootstrap-material-design/dist/js/material.js',
							'public/vendor/bootstrap-material-design/dist/js/ripples.js',
							'public/vendor/summernote/dist/summernote.js',
							'public/vendor/fullcalendar/dist/fullcalendar.js',
							'vendor/datatables/media/js/dataTables.bootstrap.js',
							'public/vendor/angular-datetime-picker-ByGiro/dist/angular-datetime-picker-ByGiro.js',
							'public/js/*.js'
						  ])
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