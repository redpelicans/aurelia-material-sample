System.register(['aurelia-framework', 'jquery'], function (_export) {
  'use strict';

  var bindable, customElement, inject, $, Point, ChartCustomElement;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return {
    setters: [function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
      customElement = _aureliaFramework.customElement;
      inject = _aureliaFramework.inject;
    }, function (_jquery) {
      $ = _jquery['default'];
    }],
    execute: function () {
      Point = (function () {
        function Point(label, x, y, updateCallback) {
          _classCallCheck(this, Point);

          this.label = label;
          this.x = x;
          this.y = y;
          this.updateCallback = updateCallback;
        }

        _createClass(Point, [{
          key: 'valueHasChanged',
          value: function valueHasChanged() {
            this.updateCallback();
          }
        }]);

        return Point;
      })();

      ChartCustomElement = (function () {
        function ChartCustomElement() {
          _classCallCheck(this, _ChartCustomElement);

          this.canAdd = true;
          this.canRemove = true;
          this.series = [];
        }

        _createClass(ChartCustomElement, [{
          key: 'attached',
          value: function attached() {
            var _this = this;

            this.arity = this.arity ? Number(this.arity) : 5;
            var c = 1;
            this.series = Array.from(new Array(this.arity), function () {
              return new Point(c++ + '.', 0, randInt(0, 500), function () {
                return _this.updatePoints();
              });
            });
            this.updateAbscissa();
            this.updatePoints();
          }
        }, {
          key: 'updatePoints',
          value: function updatePoints() {
            function y(y) {
              return (500 - y) * .4;
            };
            function path(points) {
              return points.map(function (p) {
                return p.x + ',' + y(p.y);
              }).join(' ');
            };
            this.points = '469.3,222.7 1,222.7 ' + path(this.series);
          }
        }, {
          key: 'updateAbscissa',
          value: function updateAbscissa() {
            var x = 470 / (this.series.length + 1);
            var c = 1;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = this.series[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var p = _step.value;

                p.x = x * c++;
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
          }
        }, {
          key: 'arityChanged',
          value: function arityChanged() {
            if (this.series.length <= 1) this.canRemove = false;else if (this.series.length >= 5) this.canAdd = false;else {
              this.canAdd = true;
              this.canRemove = true;
            }
          }
        }, {
          key: 'addPoint',
          value: function addPoint() {
            var _this2 = this;

            this.series.push(new Point(this.series.length + 1 + '.', 0, randInt(0, 500), function () {
              return _this2.updatePoints();
            }));
            this.arity = this.series.length;
            this.updateAbscissa();
            this.updatePoints();
          }
        }, {
          key: 'removePoint',
          value: function removePoint() {
            this.series.pop();
            this.arity = this.series.length;
            this.updateAbscissa();
            this.updatePoints();
          }
        }]);

        var _ChartCustomElement = ChartCustomElement;
        ChartCustomElement = bindable('arity')(ChartCustomElement) || ChartCustomElement;
        ChartCustomElement = customElement('chart')(ChartCustomElement) || ChartCustomElement;
        return ChartCustomElement;
      })();

      _export('ChartCustomElement', ChartCustomElement);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJ0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OzswQ0FHTSxLQUFLLEVBZUUsa0JBQWtCOzs7Ozs7QUF1RC9CLFdBQVMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUM7QUFDeEIsV0FBUSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQSxBQUFDLENBQUMsR0FBRyxHQUFHLENBQUU7R0FDNUQ7OzttQ0EzRU8sUUFBUTt3Q0FBRSxhQUFhO2lDQUFFLE1BQU07Ozs7O0FBR2pDLFdBQUs7QUFDRSxpQkFEUCxLQUFLLENBQ0csS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsY0FBYyxFQUFFO2dDQURyQyxLQUFLOztBQUVQLGNBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQ25CLGNBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ1gsY0FBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDWCxjQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztTQUN0Qzs7cUJBTkcsS0FBSzs7aUJBUU0sMkJBQUU7QUFDZixnQkFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1dBQ3ZCOzs7ZUFWRyxLQUFLOzs7QUFlRSx3QkFBa0I7QUFFaEIsaUJBRkYsa0JBQWtCLEdBRWI7OztBQUNaLGNBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBQ25CLGNBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0FBQ3RCLGNBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1NBQ2xCOztxQkFOUSxrQkFBa0I7O2lCQVFuQixvQkFBRTs7O0FBQ1IsZ0JBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNqRCxnQkFBSSxDQUFDLEdBQUksQ0FBQyxDQUFDO0FBQ1gsZ0JBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7cUJBQU0sSUFBSSxLQUFLLENBQUksQ0FBQyxFQUFFLFFBQUssQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUU7dUJBQU0sTUFBSyxZQUFZLEVBQUU7ZUFBQSxDQUFDO2FBQUEsQ0FBQyxDQUFDO0FBQzNILGdCQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDdEIsZ0JBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztXQUVyQjs7O2lCQUVXLHdCQUFFO0FBQ1oscUJBQVMsQ0FBQyxDQUFDLENBQUMsRUFBQztBQUFFLHFCQUFPLENBQUMsR0FBRyxHQUFDLENBQUMsQ0FBQSxHQUFFLEVBQUUsQ0FBQTthQUFFLENBQUM7QUFDbkMscUJBQVMsSUFBSSxDQUFDLE1BQU0sRUFBQztBQUFFLHFCQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUUsVUFBQSxDQUFDO3VCQUFPLENBQUMsQ0FBQyxDQUFDLFNBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7ZUFBRSxDQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO2FBQUUsQ0FBQztBQUNoRixnQkFBSSxDQUFDLE1BQU0sNEJBQTBCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEFBQUUsQ0FBQztXQUMxRDs7O2lCQUVhLDBCQUFFO2dCQUNULENBQUMsR0FBUSxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFBLEFBQUM7Z0JBQXBDLENBQUMsR0FBcUMsQ0FBQzs7Ozs7O0FBQy9DLG1DQUFhLElBQUksQ0FBQyxNQUFNLDhIQUFDO29CQUFqQixDQUFDOztBQUNQLGlCQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztlQUNmOzs7Ozs7Ozs7Ozs7Ozs7V0FDRjs7O2lCQUVXLHdCQUFFO0FBQ1osZ0JBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLEtBQzdDLElBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLEtBQ2pEO0FBQ0Ysa0JBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBQ25CLGtCQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQzthQUN2QjtXQUNGOzs7aUJBRU8sb0JBQUU7OztBQUNSLGdCQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBRSxJQUFJLEtBQUssQ0FBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBQyxDQUFDLFFBQUssQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUU7cUJBQU0sT0FBSyxZQUFZLEVBQUU7YUFBQSxDQUFDLENBQUMsQ0FBQztBQUN4RyxnQkFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztBQUNoQyxnQkFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQ3RCLGdCQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7V0FDckI7OztpQkFFVSx1QkFBRTtBQUNYLGdCQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ2xCLGdCQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO0FBQ2hDLGdCQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDdEIsZ0JBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztXQUNyQjs7O2tDQW5EUSxrQkFBa0I7QUFBbEIsMEJBQWtCLEdBRDlCLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FDTCxrQkFBa0IsS0FBbEIsa0JBQWtCO0FBQWxCLDBCQUFrQixHQUY5QixhQUFhLENBQUMsT0FBTyxDQUFDLENBRVYsa0JBQWtCLEtBQWxCLGtCQUFrQjtlQUFsQixrQkFBa0I7OztvQ0FBbEIsa0JBQWtCIiwiZmlsZSI6ImNoYXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtiaW5kYWJsZSwgY3VzdG9tRWxlbWVudCwgaW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5jbGFzcyBQb2ludHtcbiAgY29uc3RydWN0b3IobGFiZWwsIHgsIHksIHVwZGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5sYWJlbCA9IGxhYmVsO1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLnVwZGF0ZUNhbGxiYWNrID0gdXBkYXRlQ2FsbGJhY2s7XG4gIH1cblxuICB2YWx1ZUhhc0NoYW5nZWQoKXtcbiAgICB0aGlzLnVwZGF0ZUNhbGxiYWNrKCk7XG4gIH1cbn1cblxuQGN1c3RvbUVsZW1lbnQoJ2NoYXJ0JylcbkBiaW5kYWJsZSgnYXJpdHknKVxuZXhwb3J0IGNsYXNzIENoYXJ0Q3VzdG9tRWxlbWVudCB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHRoaXMuY2FuQWRkID0gdHJ1ZTtcbiAgICAgIHRoaXMuY2FuUmVtb3ZlID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2VyaWVzID0gW107XG4gICAgfVxuXG4gICAgYXR0YWNoZWQoKXtcbiAgICAgIHRoaXMuYXJpdHkgPSB0aGlzLmFyaXR5ID8gTnVtYmVyKHRoaXMuYXJpdHkpIDogNTtcbiAgICAgIGxldCBjID0gIDE7XG4gICAgICB0aGlzLnNlcmllcyA9IEFycmF5LmZyb20obmV3IEFycmF5KHRoaXMuYXJpdHkpLCAoKSA9PiBuZXcgUG9pbnQoYCR7YysrfS5gLCAwLCByYW5kSW50KDAsIDUwMCksICgpID0+IHRoaXMudXBkYXRlUG9pbnRzKCkpKTtcbiAgICAgIHRoaXMudXBkYXRlQWJzY2lzc2EoKTtcbiAgICAgIHRoaXMudXBkYXRlUG9pbnRzKCk7XG5cbiAgICB9XG5cbiAgICB1cGRhdGVQb2ludHMoKXtcbiAgICAgIGZ1bmN0aW9uIHkoeSl7IHJldHVybiAoNTAwLXkpKi40IH07XG4gICAgICBmdW5jdGlvbiBwYXRoKHBvaW50cyl7IHJldHVybiBwb2ludHMubWFwKCBwID0+IGAke3AueH0sJHt5KHAueSl9YCApLmpvaW4oJyAnKSB9O1xuICAgICAgdGhpcy5wb2ludHMgPSBgNDY5LjMsMjIyLjcgMSwyMjIuNyAke3BhdGgodGhpcy5zZXJpZXMpfWA7XG4gICAgfVxuXG4gICAgdXBkYXRlQWJzY2lzc2EoKXtcbiAgICAgIGxldCBbeCwgY10gPSBbNDcwIC8gKHRoaXMuc2VyaWVzLmxlbmd0aCArIDEpLCAxXTtcbiAgICAgIGZvcihsZXQgcCBvZiB0aGlzLnNlcmllcyl7XG4gICAgICAgIHAueCA9IHggKiBjKys7XG4gICAgICB9XG4gICAgfVxuXG4gICAgYXJpdHlDaGFuZ2VkKCl7XG4gICAgICBpZih0aGlzLnNlcmllcy5sZW5ndGggPD0xKSB0aGlzLmNhblJlbW92ZSA9IGZhbHNlO1xuICAgICAgZWxzZSBpZih0aGlzLnNlcmllcy5sZW5ndGggPj0gNSkgdGhpcy5jYW5BZGQgPSBmYWxzZTtcbiAgICAgIGVsc2V7XG4gICAgICAgIHRoaXMuY2FuQWRkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jYW5SZW1vdmUgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGFkZFBvaW50KCl7XG4gICAgICB0aGlzLnNlcmllcy5wdXNoKCBuZXcgUG9pbnQoYCR7dGhpcy5zZXJpZXMubGVuZ3RoKzF9LmAsIDAsIHJhbmRJbnQoMCwgNTAwKSwgKCkgPT4gdGhpcy51cGRhdGVQb2ludHMoKSkpO1xuICAgICAgdGhpcy5hcml0eSA9IHRoaXMuc2VyaWVzLmxlbmd0aDtcbiAgICAgIHRoaXMudXBkYXRlQWJzY2lzc2EoKTtcbiAgICAgIHRoaXMudXBkYXRlUG9pbnRzKCk7XG4gICAgfVxuXG4gICAgcmVtb3ZlUG9pbnQoKXtcbiAgICAgIHRoaXMuc2VyaWVzLnBvcCgpO1xuICAgICAgdGhpcy5hcml0eSA9IHRoaXMuc2VyaWVzLmxlbmd0aDtcbiAgICAgIHRoaXMudXBkYXRlQWJzY2lzc2EoKTtcbiAgICAgIHRoaXMudXBkYXRlUG9pbnRzKCk7XG4gICAgfVxuXG59XG5cbmZ1bmN0aW9uIHJhbmRJbnQobWluLCBtYXgpe1xuICByZXR1cm4gKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW4pO1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9