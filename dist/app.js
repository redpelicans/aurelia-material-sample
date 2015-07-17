'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var App = (function () {
  function App() {
    _classCallCheck(this, App);
  }

  _createClass(App, [{
    key: 'configureRouter',
    value: function configureRouter(config, router) {
      config.title = 'Transacs';
      config.map([{ route: ['', 'transacs'], name: 'transacList', moduleId: './transacs/list', title: 'Transacs' }, { route: 'transacs/:id', name: 'transacDetail', moduleId: './transacs/detail' }]);

      this.router = router;
    }
  }]);

  return App;
})();

exports.App = App;
//# sourceMappingURL=app.js.map