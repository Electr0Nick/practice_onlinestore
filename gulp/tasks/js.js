import webpack from 'webpack-stream';

export const js = () => {
  return app.gulp.src(app.path.src.js)
  // .pipe(app.plugins.plumber(
    //   app.plugins.notify.onError({
      //     title: 'JS',
      //     message: 'Error: <%= error.message %>',
      //   })
      // ))
      .pipe(webpack({
        mode: 'production',
        devtool: 'source-map',
        output: {
          filename: 'script.min.js'
        }
      }))
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(app.plugins.browserSync.stream());
}