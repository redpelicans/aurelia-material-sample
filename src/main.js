export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('./resources/index')
    .plugin('redpelicans/aurelia-material');
    //.plugin('aurelia-animator-css');

  aurelia.start().then(a => a.setRoot());
}
