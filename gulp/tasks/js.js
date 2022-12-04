import webpack from 'webpack-stream';

export const js = () => {
  return app.gulp.src(app.path.src.js)
    .pipe(app.plugins.sourcemaps.init())
    // .pipe(app.plugins.plumber(
    //   app.plugins.notify.onError({
    //     title: 'JS',
    //     message: 'Error: <%= error.message %>',
    //   })
    // ))
    .pipe(webpack({
      mode: 'production',
      output: {
        filename: 'script.min.js'
      }
    }))
    .pipe(app.plugins.sourcemaps.write('../maps'))
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(app.plugins.browserSync.stream());
}