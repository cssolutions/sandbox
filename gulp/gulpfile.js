'use strict';
var gulp = require('gulp'); 

//in cli
//bower register bootstrap-floating-labels https://github.com/fauxparse/bootstrap-floating-labels -f
//bower register jq-range-slider https://github.com/ghusse/jQRangeSlider -f
//bower register bs-grid https://github.com/pontikis/bs_grid -f
//bower register bs-tabdrop https://github.com/jmschabdach/bootstrap-tabdrop -f
//bower register bs-context-menu https://github.com/dgoguerra/bootstrap-menu -f
//bower register bs-autohide-navbar https://github.com/istvan-ujjmeszaros/bootstrap-autohidingnavbar -f
//bower register bs-bootbox https://github.com/makeusabrew/bootbox -f

// Include Our Plugins
var jshint = require('gulp-jshint');
//var sass =   require('gulp-sass');
var less =   require('gulp-less');
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
var uglify =  require('gulp-uglify');
var rename = require('gulp-rename');
var watch  = require('gulp-watch');


/**
 * Read all vendor css and js, concatiate them, then write to vendor.css and vendor.js in dev folder
 * Call if new vendor added. gulp concat-vendor
 * DONE
 */
gulp.task('concat-vendor', ['concat-vendor-js', 'concat-vendor-css']);

/**
 * Read all custom js, concatiate them, then write to custom.js
 * Call when custom js files modifiied
 */
gulp.task('concat-custom-js', function() {
    return gulp.src(['assets/custom/js/*.js'])
        .pipe(concat('custom.js'))
        .pipe(gulp.dest('dev/js'));
});

/**
 * Read all custom less, concatiate them, then write to custom.css
 * Call if less files under modification
 */
gulp.task('watch-custom-less', function() {
    return gulp.watch(['assets/custom/less/*.less'], function(event) {
      gulp.run('compile-less');
    });
});



/**
 * Read custom and vendor css and js files, then write them to final.js and final.css
 * Call if you wantto make a files to be minified and concatianated
 */
gulp.task('make-production', ['finalize-js', 'finalize-css']);


gulp.task('concat-vendor-js', function() {
    return gulp.src(['assets/vendor/jquery/dist/jquery.js',
							'assets/vendor/bootstrap/dist/js/bootstrap.js',
							//theme
							//font-awesome
						  'assets/vendor/bootstrap-material-design/dist/js/material.js'
						  //material-font
						  //'assets/vendor/bootstrap-material-design/dist/js/ripples.js'
//						  'assets/bootstrap-floating-labels/floating-labels.js',
//						  'assets/bootbox.js/bootbox.js',
//						  'assets/bootstrap-combobox/js/bootstrap-combobox.js',
//						  'assets/bootstrap-tabdrop/js/bootstrap-tabdrop.js',
//						  'assets/bootstrap-treeview/dist/bootstrap-treeview.min.js',
//						  'assets/bs-confirmation/bootstrap-confirmation.js',
//						  'assets/bs-context-menu/dist/BootstrapMenu.js',
//						  //bs-grid
//						  'assets/datatables/media/js/dataTables.material.js',
//						  'assets/fullcalendar/dist/fullcalendar.js',
//						  'assets/eonasdan-bootstrap-datetimepicker/src/js/bootstrap-datetimepicker.js',
//						  'assets/Chart.js/Chart.js',
//						  'assets/jquery-popup-overlay/jquery.popupoverlay.js',
//						  'assets/jquery-range-slider/jQRangeSlider.js',
//						  'assets/moment/moment.js',
//						  'assets/jquery.sparkline/index.js',
//						  'assets/summernote/dist/summernote.js'
						  ])
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('dev/js'));
});

gulp.task('concat-vendor-css', function() {
    return gulp.src(['assets/vendor/bootstrap/dist/css/bootstrap.css',
							'assets/vendor/bootstrap/dist/css/bootstrap-theme.css',
						   'assets/bootstrap-material-design/dist/css/bootstrap-material-design.css'
//						  'assets/bootstrap-material-design/dist/js/ripples.js',
//						  'assets/bootstrap-floating-labels/floating-labels.js',
//						  'assets/bootbox.js/bootbox.js',
//						  'assets/bootstrap-combobox/js/bootstrap-combobox.js',
//						  'assets/bootstrap-tabdrop/js/bootstrap-tabdrop.js',
//						  'assets/bootstrap-treeview/dist/bootstrap-treeview.min.js',
//						  'assets/bs-confirmation/bootstrap-confirmation.js',
//						  'assets/bs-context-menu/dist/BootstrapMenu.js',
//						  'assets/datatables/media/js/dataTables.material.js',
//						  'assets/fullcalendar/dist/fullcalendar.js',
//						  'assets/eonasdan-bootstrap-datetimepicker/src/js/bootstrap-datetimepicker.js',
//						  'assets/Chart.js/Chart.js',
//						  'assets/jquery-popup-overlay/jquery.popupoverlay.js',
//						  'assets/jquery-range-slider/jQRangeSlider.js',
//						  'assets/moment/moment.js',
//						  'assets/jquery.sparkline/index.js',
//						  'assets/summernote/dist/summernote.js'
						  ])
        .pipe(concat('vendor.css'))
        .pipe(gulp.dest('dev/css'));
});

gulp.task('compile-less', function() {
    return gulp.src(['assets/custom/less/*.less'])
        .pipe(less())
		  .pipe(concat('custom.css'))
        .pipe(gulp.dest('dev/css'));
});

gulp.task('finalize-js', function() {
    return gulp.src(['dev/js/vendor.js', 'dev/js/custom.js'])
        .pipe(concat('final.js'))
        .pipe(gulp.dest('prod'))
        .pipe(uglify())
        .pipe(gulp.dest('prod'));
});

gulp.task('finalize-css', function() {
    return gulp.src(['dev/css/vendor.css', 'dev/css/custom.css'])
		  .pipe(concat('final.css'))
        .pipe(gulp.dest('prod'))
		  .pipe(cssmin())
		  .pipe(gulp.dest('prod'));
});