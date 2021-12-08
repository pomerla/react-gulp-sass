module.exports = function () {
  $.gulp.task('serve', function () {
    $.browserSync.init({
      server: 'build/',
      notify: false
    });

    $.gulp.watch('sass/**/*.scss', $.gulp.series('sass'));
    $.gulp.watch('*.html', $.gulp.series('html'));
    $.gulp.watch('js/**/*.js', $.gulp.series('scripts'));
    $.gulp.watch('img/**/*.{png,jpg,svg}', $.gulp.series('allimg'));
  });
};