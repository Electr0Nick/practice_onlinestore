import include from 'gulp-file-include';
import webpHtml from 'gulp-webp-html';
import htmlmin from 'gulp-htmlmin';

export const html = () => {
  return app.gulp.src(app.path.src.html,)
    // .pipe(app.plugins.plumber(
    //   app.plugins.notify.onError({
    //     title: 'HTML',
    //     message: 'Error: <%= error.message %>',
    //   })
    // ))
    .pipe(include())
    .pipe(webpHtml())
    .pipe(htmlmin({
      removeComments: true
    }))
    .pipe(app.plugins.rename({
      suffix: '.notmin'
    }))
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(htmlmin({
      collapseWhitespace: true,
    }))
    .pipe(app.plugins.rename('index.html'))
    .pipe(app.gulp.dest(app.path.build.html,))
    .pipe(app.plugins.browserSync.stream());
}

