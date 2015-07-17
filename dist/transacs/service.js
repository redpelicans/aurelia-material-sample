System.register(['socket.io-client', 'aurelia-framework', 'aurelia-event-aggregator'], function (_export) {
  'use strict';

  var io, inject, EventAggregator, TransacService;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_socketIoClient) {
      io = _socketIoClient['default'];
    }, function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_aureliaEventAggregator) {
      EventAggregator = _aureliaEventAggregator.EventAggregator;
    }],
    execute: function () {
      TransacService = (function () {
        function TransacService(eventAggregator) {
          _classCallCheck(this, _TransacService);

          console.log('Init socket IO and EventAggregator ...');
          this.socket = io('http://rp1.redpelicans.com:3005');
          this.eventAggregator = eventAggregator;
          this.serverSubscribe();
        }

        _createClass(TransacService, [{
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

        var _TransacService = TransacService;
        TransacService = inject(EventAggregator)(TransacService) || TransacService;
        return TransacService;
      })();

      _export('default', TransacService);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zYWNzL3NlcnZpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O21DQUtxQixjQUFjOzs7Ozs7Ozs7O2lDQUozQixNQUFNOztnREFDTixlQUFlOzs7QUFHRixvQkFBYztBQUN0QixpQkFEUSxjQUFjLENBQ3JCLGVBQWUsRUFBQzs7O0FBQzFCLGlCQUFPLENBQUMsR0FBRyxDQUFDLHdDQUF3QyxDQUFDLENBQUM7QUFDdEQsY0FBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsaUNBQWlDLENBQUMsQ0FBQztBQUNwRCxjQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztBQUN2QyxjQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDeEI7O3FCQU5rQixjQUFjOztpQkFRbEIsMkJBQUU7OztBQUNmLGdCQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxVQUFBLEtBQUssRUFBSTtBQUN4QyxvQkFBSyxlQUFlLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ3ZELENBQUMsQ0FBQztXQUNKOzs7aUJBRVEsbUJBQUMsRUFBRSxFQUFDO0FBQ1gsbUJBQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxDQUFDLENBQUM7V0FDN0Q7OztpQkFFRyxjQUFDLE1BQU0sRUFBQzs7O0FBQ1YsZ0JBQUksT0FBTyxHQUFHLElBQUksT0FBTyxDQUFFLFVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBSTtBQUM3QyxxQkFBSyxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxNQUFNLEVBQUUsVUFBQyxHQUFHLEVBQUUsUUFBUSxFQUFLO0FBQzNELG9CQUFHLEdBQUcsRUFBQyxPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUMxQix1QkFBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2VBQ25CLENBQUMsQ0FBQzthQUNKLENBQUMsQ0FBQTtBQUNGLG1CQUFPLE9BQU8sQ0FBQztXQUNoQjs7OzhCQTFCa0IsY0FBYztBQUFkLHNCQUFjLEdBRGxDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FDSCxjQUFjLEtBQWQsY0FBYztlQUFkLGNBQWM7Ozt5QkFBZCxjQUFjIiwiZmlsZSI6InRyYW5zYWNzL3NlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaW8gZnJvbSAnc29ja2V0LmlvLWNsaWVudCc7XG5pbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHtFdmVudEFnZ3JlZ2F0b3J9IGZyb20gJ2F1cmVsaWEtZXZlbnQtYWdncmVnYXRvcic7XG5cbkBpbmplY3QoRXZlbnRBZ2dyZWdhdG9yKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhbnNhY1NlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihldmVudEFnZ3JlZ2F0b3Ipe1xuICAgIGNvbnNvbGUubG9nKCdJbml0IHNvY2tldCBJTyBhbmQgRXZlbnRBZ2dyZWdhdG9yIC4uLicpO1xuICAgIHRoaXMuc29ja2V0ID0gaW8oXCJodHRwOi8vcnAxLnJlZHBlbGljYW5zLmNvbTozMDA1XCIpO1xuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yID0gZXZlbnRBZ2dyZWdhdG9yO1xuICAgIHRoaXMuc2VydmVyU3Vic2NyaWJlKCk7XG4gIH1cblxuICBzZXJ2ZXJTdWJzY3JpYmUoKXtcbiAgICB0aGlzLnNvY2tldC5vbigndHJhbnNhY3M6ZXZlbnQnLCBldmVudCA9PiB7XG4gICAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5wdWJsaXNoKCd0cmFuc2FjczpldmVudCcsIGV2ZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIHN1YnNjcmliZShjYil7XG4gICAgcmV0dXJuIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLnN1YnNjcmliZSgndHJhbnNhY3M6ZXZlbnQnLCBjYik7XG4gIH1cblxuICBsb2FkKHBhcmFtcyl7XG4gICAgbGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZSggKHJlc29sdmUsIHJlamVjdCkgPT57XG4gICAgICB0aGlzLnNvY2tldC5lbWl0KCd0cmFuc2Fjczpsb2FkJywgcGFyYW1zLCAoZXJyLCB0cmFuc2FjcykgPT4ge1xuICAgICAgICBpZihlcnIpcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgICByZXNvbHZlKHRyYW5zYWNzKTtcbiAgICAgIH0pO1xuICAgIH0pXG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==