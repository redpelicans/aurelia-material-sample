System.register(['aurelia-framework', 'lodash', './service', './index'], function (_export) {
  'use strict';

  var inject, _, TransacService, Transac, makeNode, TransacList;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_lodash) {
      _ = _lodash['default'];
    }, function (_service) {
      TransacService = _service['default'];
    }, function (_index) {
      Transac = _index.Transac;
      makeNode = _index.makeNode;
    }],
    execute: function () {
      TransacList = (function () {
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

        _createClass(TransacList, [{
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
            this.transacs = _.sortByOrder(this.transacs, [this.sortColumn], [this.sortOrder]);
          }
        }, {
          key: 'addCache',
          value: function addCache(event) {
            var node = makeNode(event);
            this.eventsCache[node.id] = node;
            var parent = this.eventsCache[node.parentId];
            if (parent) parent.addChild(node);

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
            })['catch'](function (err) {
              return console.log(err);
            });
          }
        }, {
          key: 'activate',
          value: function activate(params) {
            return this.loadData();
          }
        }]);

        var _TransacList = TransacList;
        TransacList = inject(TransacService)(TransacList) || TransacList;
        return TransacList;
      })();

      _export('TransacList', TransacList);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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TUFBTSxDQUFDLENBQ3BDLElBQUksQ0FBQyxVQUFBLE1BQU0sRUFBSTtBQUNkLGtCQUFHLE1BQU0sRUFBQzs7Ozs7O0FBQ1IsdUNBQWlCLE1BQU0sOEhBQUM7d0JBQWhCLE1BQUs7O0FBQ1gsd0JBQUksSUFBSSxHQUFHLE1BQUssUUFBUSxDQUFDLE1BQUssQ0FBQyxDQUFDO0FBQ2hDLHdCQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRSxNQUFLLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7bUJBQy9DOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0Qsc0JBQUssV0FBVyxFQUFFLENBQUM7QUFDbkIsdUJBQU8sQ0FBQyxHQUFHLENBQUMsTUFBSyxRQUFRLENBQUMsQ0FBQTtlQUMzQjthQUNGLENBQUMsU0FFSSxDQUFDLFVBQUEsR0FBRztxQkFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQzthQUFBLENBQUMsQ0FBQztXQUNuQzs7O2lCQUVPLGtCQUFDLE1BQU0sRUFBQztBQUNkLG1CQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztXQUN4Qjs7OzJCQXRFVSxXQUFXO0FBQVgsbUJBQVcsR0FEdkIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUNWLFdBQVcsS0FBWCxXQUFXO2VBQVgsV0FBVzs7OzZCQUFYLFdBQVciLCJmaWxlIjoidHJhbnNhY3MvbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFRyYW5zYWNTZXJ2aWNlIGZyb20gJy4vc2VydmljZSc7XG5pbXBvcnQge1RyYW5zYWMsIG1ha2VOb2RlfSBmcm9tICcuL2luZGV4JztcblxuQGluamVjdChUcmFuc2FjU2VydmljZSlcbmV4cG9ydCBjbGFzcyBUcmFuc2FjTGlzdCB7XG4gIGNvbnN0cnVjdG9yKHNlcnZpY2Upe1xuICAgIHRoaXMudHJhbnNhY1NlcnZpY2UgPSBzZXJ2aWNlO1xuICAgIHRoaXMuZXZlbnRzQ2FjaGUgPSB7fTtcbiAgICB0aGlzLnRyYW5zYWNzID0gW1xuICAgICAgLy97bGFiZWw6ICd0ZXN0Jywgc2VydmVyOiAncnAnLCB2YWx1ZURhdGU6IG5ldyBEYXRlLCBjcmVhdGVkQXQ6IG5ldyBEYXRlKCksIGRlbGF5OjE1fVxuICAgIF07XG4gICAgdGhpcy5mcm9tID0gbmV3IERhdGUoMjAxNCwxLDEpO1xuICAgIHRoaXMudG8gPSBuZXcgRGF0ZSgpO1xuICAgIHRoaXMuZGF0ZU1vZGUgPSBcIlByb2Nlc3NpbmcgRGF0ZVwiO1xuICAgIHRoaXMuZGF0ZU1vZGVzID0gW1wiUHJvY2Vzc2luZyBEYXRlXCIsIFwiVmFsdWUgRGF0ZVwiXTtcbiAgICB0aGlzLnNvcnRDb2x1bW4gPSAnbmFtZSc7XG4gICAgdGhpcy5zb3J0T3JkZXIgPSAnYXNjJztcbiAgfVxuXG4gIHJldmVyc2VTb3J0T3JkZXIoKXtcbiAgICB0aGlzLnNvcnRPcmRlciA9IHRoaXMuc29ydE9yZGVyID09PSAnYXNjJyA/ICdkZXNjJyA6ICdhc2MnO1xuICB9XG5cbiAgc29ydFRhYmxlKGNvbHVtbil7XG4gICAgaWYodGhpcy5zb3J0Q29sdW1uID09PSBjb2x1bW4pIHRoaXMucmV2ZXJzZVNvcnRPcmRlcigpO1xuICAgIHRoaXMuc29ydENvbHVtbiA9IGNvbHVtbjtcbiAgICB0aGlzLmRvU29ydFRhYmxlKCk7XG4gIH1cblxuICBkb1NvcnRUYWJsZSgpe1xuICAgIHRoaXMudHJhbnNhY3MgPSBfLnNvcnRCeU9yZGVyKHRoaXMudHJhbnNhY3MsIFt0aGlzLnNvcnRDb2x1bW5dLCBbdGhpcy5zb3J0T3JkZXJdKTtcbiAgfVxuXG4gIGFkZENhY2hlKGV2ZW50KXtcbiAgICAvLyBjaGVjayBleGlzdGVuY2UgISEhXG4gICAgbGV0IG5vZGUgPSBtYWtlTm9kZShldmVudCk7XG4gICAgdGhpcy5ldmVudHNDYWNoZVtub2RlLmlkXSA9IG5vZGU7XG4gICAgbGV0IHBhcmVudCA9IHRoaXMuZXZlbnRzQ2FjaGVbbm9kZS5wYXJlbnRJZF07XG4gICAgaWYocGFyZW50KSBwYXJlbnQuYWRkQ2hpbGQobm9kZSk7XG4gICAgLy9sZXQgdHJhbnNhYyA9IHRoaXMuZXZlbnRzQ2FjaGVbbm9kZS50cmFuc2FjSWRdO1xuICAgIC8vY29uc29sZS5sb2codHJhbnNhYyAmJiB7bGFiZWw6IHRyYW5zYWMubGFiZWwsIGlzUnVubmluZzogdHJhbnNhYy5pc1J1bm5pbmd9KVxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgbG9hZERhdGEoKXtcbiAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgZnJvbTogbW9tZW50KHRoaXMuZnJvbSkuZm9ybWF0KCdERC9NTS9ZWVlZJyksXG4gICAgICB0bzogbW9tZW50KHRoaXMudG8pLmZvcm1hdCgnREQvTU0vWVlZWScpLFxuICAgICAgZGF0ZU1vZGU6IHRoaXMuZGF0ZU1vZGUgPT09ICdWYWx1ZSBEYXRlJyA/ICd2YWx1ZURhdGUnIDogJ2NyZWF0ZWRBdCdcbiAgICB9O1xuXG4gICAgLy9jb25zb2xlLmxvZyhwYXJhbXMpO1xuICAgIHRoaXMudW5zdWJzY3JpYmVIYW5kbGVyID0gdGhpcy50cmFuc2FjU2VydmljZS5zdWJzY3JpYmUoIGV2ZW50ID0+IHtcbiAgICAgIGxldCBub2RlID0gdGhpcy5hZGRDYWNoZShldmVudCk7XG4gICAgICBpZihub2RlLmlzVHJhbnNhYygpKSB0aGlzLnRyYW5zYWNzLnB1c2gobm9kZSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy50cmFuc2FjU2VydmljZS5sb2FkKHBhcmFtcylcbiAgICAgIC50aGVuKGV2ZW50cyA9PiB7XG4gICAgICAgIGlmKGV2ZW50cyl7IFxuICAgICAgICAgIGZvcihsZXQgZXZlbnQgb2YgZXZlbnRzKXtcbiAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy5hZGRDYWNoZShldmVudCk7XG4gICAgICAgICAgICBpZihub2RlLmlzVHJhbnNhYygpKSB0aGlzLnRyYW5zYWNzLnB1c2gobm9kZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuZG9Tb3J0VGFibGUoKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnRyYW5zYWNzKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLy8gVE9ET1xuICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgfVxuXG4gIGFjdGl2YXRlKHBhcmFtcyl7XG4gICAgcmV0dXJuIHRoaXMubG9hZERhdGEoKTtcbiAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=