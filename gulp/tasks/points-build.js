var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('points-build', function() {
  gulp.src([
    './src/module.js',
    './src/sfPath.js',
    './src/services/*.js',
    './src/directives/*.js'
    ])
  .pipe(concat('schema-form.js'))
  .pipe(gulp.dest('./dist/'));
});
