import del from 'del';

export const clean = () => {
  del(`./${app.path.rootFolder}.zip`);
  return del(app.path.clean);
};