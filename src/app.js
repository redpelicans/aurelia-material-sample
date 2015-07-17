export class App {
  configureRouter(config, router){
    config.title = 'Transacs';
    config.map([
      { route: ['','transacs'], name: 'transacList', moduleId: './transacs/list', title:'Transacs' },
      { route: 'transacs/:id', name: 'transacDetail', moduleId: './transacs/detail' }
    ]);

    this.router = router;
  }
}
