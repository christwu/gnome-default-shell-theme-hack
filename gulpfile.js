var gulp = require('gulp');
var gulpSass = require('gulp-sass');

gulp.task('default', function () {
  gulp.src('gnome-shell/*.scss')
    .pipe(gulpSass())
    .pipe(gulp.dest('gnome-shell'));
});

gulp.task('watch', function () {
  gulp.watch('gnome-shell/**/*.scss', ['default']);
});
