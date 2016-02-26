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
	return gulp.src([//jquery
						  'assets/jquery-ui/themes/start/jquery-ui.css',
						  'assets/bootstrap/dist/css/bootstrap.css',
						  'assets/bootstrap/dist/css/bootstrap-theme.css',
						  'assets/font-awesome/css/font-awesome.css',
						  'assets/bootstrap-material-design/dist/css/material.css',
						  'assets/bootstrap-material-design/dist/css/material-wfont.css',
						  'assets/bootstrap-material-design/dist/css/ripples.css',
						  'assets/bootstrap-floating-labels/floating-labels.css',
						  //bootbox
						  'assets/bootstrap-combobox/css/bootstrap-combobox.css',
						  'assets/bootstrap-tabdrop/css/bootstrap-tabdrop.css',
						  'assets/bootstrap-treeview/dist/bootstrap-treeview.min.css',
						  //bs-confirmation
						  //bs-context-menu
						  'assets/bs-grid/dist/assets/stylesheets/bs-grid.css',
						  'assets/datatables/media/css/dataTables.material.css',
						  'assets/fullcalendar/dist/fullcalendar.css',
						  'assets/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css',
						  //chart-js
						  //jquery-popup-overlay
						  'assets/jquery-range-slider/css/classic.css',
						  //moment
						  'assets/summernote/dist/summernote.css'
						 ])
		.pipe(concat('vendor.css'))
		.pipe(gulp.dest('public/css'))
		.pipe(cssmin())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('public'));
});

gulp.task('scripts', function() {
    return gulp.src(['assets/jquery/dist/jquery.js',
							'assets/bootstrap/dist/js/bootstrap.js',
							
							
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