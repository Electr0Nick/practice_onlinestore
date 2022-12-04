export const cleanmaps = () => {
  return app.plugins.del(app.path.cleanmaps);
};