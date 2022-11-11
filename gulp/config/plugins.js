import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import browserSync from 'browser-sync';
import rename from 'gulp-rename';
import newer from 'gulp-newer';


export const plugins = {
  plumber: plumber,
  notify: notify,
  browserSync: browserSync,
  rename: rename,
  newer: newer,
}