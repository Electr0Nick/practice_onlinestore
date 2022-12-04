export const clean = () => {
  app.plugins.del(`./${app.path.rootFolder}.zip`);
  return app.plugins.del(app.path.clean);
};