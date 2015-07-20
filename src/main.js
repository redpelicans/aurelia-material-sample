export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('redpelicans/aurelia-material')
    .plugin('./resources/index');

  aurelia.start().then(a => a.setRoot());
}
