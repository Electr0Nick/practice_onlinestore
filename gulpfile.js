import gulp from 'gulp';
import { path } from './gulp/config/path.js';
import { plugins } from './gulp/config/plugins.js';


global.app = {
  gulp: gulp,
  path: path,
  plugins:plugins,
};


import { clean } from './gulp/tasks/clean.js';
import { server } from './gulp/tasks/server.js';
import { html } from './gulp/tasks/html.js';
import { scss } from './gulp/tasks/scss.js';
import { js } from './gulp/tasks/js.js';
import { img } from './gulp/tasks/img.js';
// import { copy } from './gulp/tasks/copy.js';
import { otf2ttf, ttf2woff, fontsStyle } from './gulp/tasks/fonts.js';
import { zip } from './gulp/tasks/zip.js';


function watcher() {
  // gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.img, img);
}


const fonts = gulp.series(otf2ttf, ttf2woff, fontsStyle);
// const mainTasks = gulp.series(fonts, gulp.parallel(html, scss, js, img, copy));
const mainTasks = gulp.series(fonts, gulp.parallel(html, scss, js, img));
const dev = gulp.series(clean, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(clean, mainTasks, zip);


gulp.task('default', dev);
export {clean};
export {build};