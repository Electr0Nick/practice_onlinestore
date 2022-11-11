import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import cleanCss from 'gulp-clean-css';
import autoprefixer from 'gulp-autoprefixer';
import webpCss from 'gulp-webpcss';


const sass = gulpSass(dartSass);

export const scss = () => {
  return app.gulp.src(app.path.src.scss, { sourcemaps: true })
    // .pipe(app.plugins.plumber(
    //   app.plugins.notify.onError({
    //     title: 'SCSS',
    //     message: 'Error: <%= error.message %>',
    //   })
    // ))
    .pipe(sass({
      outputStyle: 'expanded',
    }))
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 10 versions'],
      grid: true,
    }))
    .pipe(cleanCss({
      format: 'beautify',
    }))
    .pipe(webpCss({
      webpClass: '.webp',
      noWebpClass: '.no-webp'
    }))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.rename({
      suffix: '.min'
    }))
    .pipe(cleanCss())
    .pipe(app.gulp.dest(app.path.build.css, { sourcemaps:'.'}))
    .pipe(app.plugins.browserSync.stream());
}