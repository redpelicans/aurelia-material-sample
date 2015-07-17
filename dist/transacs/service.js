'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _socketIoClient = require('socket.io-client');

var _socketIoClient2 = _interopRequireDefault(_socketIoClient);

var _aureliaFramework = require('aurelia-framework');

var _aureliaEventAggregator = require('aurelia-event-aggregator');

var TransacService = (function () {
  function TransacService(eventAggregator) {
    _classCallCheck(this, _TransacService);

    console.log('Init socket IO and EventAggregator ...');
    this.socket = (0, _socketIoClient2['default'])('http://rp1.redpelicans.com:3005');
    this.eventAggregator = eventAggregator;
    this.serverSubscribe();
  }

  var _TransacService = TransacService;

  _createClass(_TransacService, [{
    key: 'serverSubscribe',
    value: function serverSubscribe() {
      var _this = this;

      this.socket.on('transacs:event', function (event) {
        _this.eventAggregator.publish('transacs:event', event);
      });
    }
  }, {
    key: 'subscribe',
    value: function subscribe(cb) {
      return this.eventAggregator.subscribe('transacs:event', cb);
    }
  }, {
    key: 'load',
    value: function load(params) {
      var _this2 = this;

      var promise = new Promise(function (resolve, reject) {
        _this2.socket.emit('transacs:load', params, function (err, transacs) {
          if (err) return reject(err);
          resolve(transacs);
        });
      });
      return promise;
    }
  }]);

  TransacService = (0, _aureliaFramework.inject)(_aureliaEventAggregator.EventAggregator)(TransacService) || TransacService;
  return TransacService;
})();

exports['default'] = TransacService;
module.exports = exports['default'];
//# sourceMappingURL=../transacs/service.js.map