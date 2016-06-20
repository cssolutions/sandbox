'use strict';
var gulp = require('gulp'); 

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass =   require('gulp-sass');
var less =   require('gulp-less');
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
var uglify =  require('gulp-uglify');
var rename = require('gulp-rename');
var watch  = require('gulp-watch');

gulp.task('compile-less', function() {
    return gulp.src(['custom/less/*.less'])
        .pipe(less().on('error', less.logError))
		  .pipe(concat('less.css'))
        .pipe(gulp.dest('css'))
		  .pipe(cssmin())
		  .pipe(rename({suffix: '.min'}))
		  .pipe(gulp.dest('css'));
	
});

gulp.task('compile-sass', function() {
    return gulp.src(['custom/sass/*.sass'])
        .pipe(sass().on('error', sass.logError))
		  .pipe(concat('sass.css'))
        .pipe(gulp.dest('css'))
		  .pipe(cssmin())
		  .pipe(rename({suffix: '.min'}))
		  .pipe(gulp.dest('css'));
	
});

gulp.task('compile-js', function() {
    return gulp.src(['custom/js/*.js'])
        .pipe(concat('site.js'))
        .pipe(gulp.dest('js'))
        .pipe(rename('site.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('js'));
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
		.pipe(gulp.dest('css'))
		.pipe(cssmin())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('css'));
});

gulp.task('scripts', function() {
    return gulp.src(['assets/jquery/dist/jquery.js',
							'assets/bootstrap/dist/js/bootstrap.js',
							//theme
							//font-awesome
						  'assets/bootstrap-material-design/dist/js/material.js',
						  //material-font
						  'assets/bootstrap-material-design/dist/js/ripples.js',
						  'assets/bootstrap-floating-labels/floating-labels.js',
						  'assets/bootbox.js/bootbox.js',
						  'assets/bootstrap-combobox/js/bootstrap-combobox.js',
						  'assets/bootstrap-tabdrop/js/bootstrap-tabdrop.js',
						  'assets/bootstrap-treeview/dist/bootstrap-treeview.min.js',
						  'assets/bs-confirmation/bootstrap-confirmation.js',
						  'assets/bs-context-menu/dist/BootstrapMenu.js',
						  //bs-grid
						  'assets/datatables/media/js/dataTables.material.js',
						  'assets/fullcalendar/dist/fullcalendar.js',
						  'assets/eonasdan-bootstrap-datetimepicker/src/js/bootstrap-datetimepicker.js',
						  'assets/Chart.js/Chart.js',
						  'assets/jquery-popup-overlay/jquery.popupoverlay.js',
						  'assets/jquery-range-slider/jQRangeSlider.js',
						  'assets/moment/moment.js',
						  'assets/jquery.sparkline/index.js',
						  'assets/summernote/dist/summernote.js'
						  ])
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('js'))
        .pipe(rename('vendor.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('js'));
});




gulp.task('watch-js', function() {
    return watch(['custom/js/*.js'], function(event) {
      gulp.run('compile-js');
    });
});

gulp.task('watch-sass', function() {
    return watch(['custom/sass/*.sass'], function(event) {
      gulp.run('compile-sass');
    });
});

gulp.task('watch-less', function() {
    return watch(['custom/less/*.less'], function(event) {
      gulp.run('compile-less');
    });
});

gulp.task('default', ['css', 'scripts']);