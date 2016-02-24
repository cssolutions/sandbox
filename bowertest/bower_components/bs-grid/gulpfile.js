// Declare variables to represent the imports we will use
var gulp         = require('gulp'),
    plumber      = require('gulp-plumber'),
    autoprefixer = require('gulp-autoprefixer'),
    scss         = require('gulp-sass');


// First, handle the scss files
gulp.task('scss', function() {
  gulp.src(['./src/scss/assets/stylesheets/bs-grid.scss'])
    .pipe(plumber({
      errorHandler: function(err) {
        console.log(err.message);
        this.emit('end');
      }
    }))
    .pipe(scss())
    .pipe(autoprefixer('last 2 versions'))
    .pipe(gulp.dest('./dist/assets/stylesheets'));

  gulp.src(['./src/scss/assets/stylesheets/bs-grid.scss'])
    .pipe(plumber({
      errorHandler: function(err) {
        console.log(err.message);
        this.emit('end')
      }
    }))
    .pipe(scss())
    .pipe(autoprefixer('last 2 versions'))
    .pipe(gulp.dest('./demos/simple/assets/stylesheets'));
});

// TODO: Less files

gulp.task('watch', function() {
  gulp.watch('./src/scss/assets/stylesheets/**/*.scss', ['scss'])
});

gulp.task('default', ['watch'], function() {
  gulp.start(['scss']); // include Less later
})
