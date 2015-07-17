'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _aureliaFramework = require('aurelia-framework');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _service = require('./service');

var _service2 = _interopRequireDefault(_service);

var _index = require('./index');

var TransacList = (function () {
  function TransacList(service) {
    _classCallCheck(this, _TransacList);

    this.transacService = service;
    this.eventsCache = {};
    this.transacs = [];
    this.from = new Date(2014, 1, 1);
    this.to = new Date();
    this.dateMode = 'Processing Date';
    this.dateModes = ['Processing Date', 'Value Date'];
    this.sortColumn = 'name';
    this.sortOrder = 'asc';
  }

  var _TransacList = TransacList;

  _createClass(_TransacList, [{
    key: 'reverseSortOrder',
    value: function reverseSortOrder() {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    }
  }, {
    key: 'sortTable',
    value: function sortTable(column) {
      if (this.sortColumn === column) this.reverseSortOrder();
      this.sortColumn = column;
      this.doSortTable();
    }
  }, {
    key: 'doSortTable',
    value: function doSortTable() {
      this.transacs = _lodash2['default'].sortByOrder(this.transacs, [this.sortColumn], [this.sortOrder]);
    }
  }, {
    key: 'addCache',
    value: function addCache(event) {
      // check existence !!!
      var node = (0, _index.makeNode)(event);
      this.eventsCache[node.id] = node;
      var parent = this.eventsCache[node.parentId];
      if (parent) parent.addChild(node);
      //let transac = this.eventsCache[node.transacId];
      //console.log(transac && {label: transac.label, isRunning: transac.isRunning})
      return node;
    }
  }, {
    key: 'loadData',
    value: function loadData() {
      var _this = this;

      var params = {
        from: moment(this.from).format('DD/MM/YYYY'),
        to: moment(this.to).format('DD/MM/YYYY'),
        dateMode: this.dateMode === 'Value Date' ? 'valueDate' : 'createdAt'
      };

      //console.log(params);
      this.unsubscribeHandler = this.transacService.subscribe(function (event) {
        var node = _this.addCache(event);
        if (node.isTransac()) _this.transacs.push(node);
      });

      return this.transacService.load(params).then(function (events) {
        if (events) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = events[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var _event = _step.value;

              var node = _this.addCache(_event);
              if (node.isTransac()) _this.transacs.push(node);
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator['return']) {
                _iterator['return']();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          _this.doSortTable();
          console.log(_this.transacs);
        }
      })
      // TODO
      ['catch'](function (err) {
        return console.log(err);
      });
    }
  }, {
    key: 'activate',
    value: function activate(params) {
      return this.loadData();
    }
  }]);

  TransacList = (0, _aureliaFramework.inject)(_service2['default'])(TransacList) || TransacList;
  return TransacList;
})();

exports.TransacList = TransacList;

//{label: 'test', server: 'rp', valueDate: new Date, createdAt: new Date(), delay:15}
//# sourceMappingURL=../transacs/list.js.map