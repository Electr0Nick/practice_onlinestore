import del from 'del';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import browserSync from 'browser-sync';
import rename from 'gulp-rename';
import newer from 'gulp-newer';
import sourcemaps from 'gulp-sourcemaps';


export const plugins = {
  del: del,
  plumber: plumber,
  notify: notify,
  browserSync: browserSync,
  rename: rename,
  newer: newer,
  sourcemaps: sourcemaps,
}