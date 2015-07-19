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
          var _this = this;

          _classCallCheck(this, _ChartCustomElement);

          console.log(this.arity);
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

        _createClass(ChartCustomElement, [{
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
          key: 'addPoint',
          value: function addPoint() {
            var _this2 = this;

            this.series.push(new Point(this.series.length + 1 + '.', 0, randInt(0, 500), function () {
              return _this2.updatePoints();
            }));
            this.updateAbscissa();
            this.updatePoints();
          }
        }, {
          key: 'removePoint',
          value: function removePoint() {
            this.series.pop();
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
//# sourceMappingURL=data:application/json;base64,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QUFLLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFO3FCQUFNLE9BQUssWUFBWSxFQUFFO2FBQUEsQ0FBQyxDQUFDLENBQUM7QUFDeEcsZ0JBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUN0QixnQkFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1dBQ3JCOzs7aUJBRVUsdUJBQUU7QUFDWCxnQkFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUNsQixnQkFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQ3RCLGdCQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7V0FDckI7OztrQ0FuQ1Esa0JBQWtCO0FBQWxCLDBCQUFrQixHQUQ5QixRQUFRLENBQUMsT0FBTyxDQUFDLENBQ0wsa0JBQWtCLEtBQWxCLGtCQUFrQjtBQUFsQiwwQkFBa0IsR0FGOUIsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUVWLGtCQUFrQixLQUFsQixrQkFBa0I7ZUFBbEIsa0JBQWtCOzs7b0NBQWxCLGtCQUFrQiIsImZpbGUiOiJjaGFydC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YmluZGFibGUsIGN1c3RvbUVsZW1lbnQsIGluamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuY2xhc3MgUG9pbnR7XG4gIGNvbnN0cnVjdG9yKGxhYmVsLCB4LCB5LCB1cGRhdGVDYWxsYmFjaykge1xuICAgIHRoaXMubGFiZWwgPSBsYWJlbDtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy51cGRhdGVDYWxsYmFjayA9IHVwZGF0ZUNhbGxiYWNrO1xuICB9XG5cbiAgdmFsdWVIYXNDaGFuZ2VkKCl7XG4gICAgdGhpcy51cGRhdGVDYWxsYmFjaygpO1xuICB9XG59XG5cbkBjdXN0b21FbGVtZW50KCdjaGFydCcpXG5AYmluZGFibGUoJ2FyaXR5JylcbmV4cG9ydCBjbGFzcyBDaGFydEN1c3RvbUVsZW1lbnQge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAvLyBUT0RPXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmFyaXR5KVxuICAgICAgdGhpcy5hcml0eSA9IHRoaXMuYXJpdHkgPyBOdW1iZXIodGhpcy5hcml0eSkgOiA1O1xuICAgICAgbGV0IGMgPSAgMTtcbiAgICAgIHRoaXMuc2VyaWVzID0gQXJyYXkuZnJvbShuZXcgQXJyYXkodGhpcy5hcml0eSksICgpID0+IG5ldyBQb2ludChgJHtjKyt9LmAsIDAsIHJhbmRJbnQoMCwgNTAwKSwgKCkgPT4gdGhpcy51cGRhdGVQb2ludHMoKSkpO1xuICAgICAgdGhpcy51cGRhdGVBYnNjaXNzYSgpO1xuICAgICAgdGhpcy51cGRhdGVQb2ludHMoKTtcbiAgICAgfVxuXG4gICAgdXBkYXRlUG9pbnRzKCl7XG4gICAgICBmdW5jdGlvbiB5KHkpeyByZXR1cm4gKDUwMC15KSouNCB9O1xuICAgICAgZnVuY3Rpb24gcGF0aChwb2ludHMpeyByZXR1cm4gcG9pbnRzLm1hcCggcCA9PiBgJHtwLnh9LCR7eShwLnkpfWAgKS5qb2luKCcgJykgfTtcbiAgICAgIHRoaXMucG9pbnRzID0gYDQ2OS4zLDIyMi43IDEsMjIyLjcgJHtwYXRoKHRoaXMuc2VyaWVzKX1gO1xuICAgIH1cblxuICAgIHVwZGF0ZUFic2Npc3NhKCl7XG4gICAgICBsZXQgW3gsIGNdID0gWzQ3MCAvICh0aGlzLnNlcmllcy5sZW5ndGggKyAxKSwgMV07XG4gICAgICBmb3IobGV0IHAgb2YgdGhpcy5zZXJpZXMpe1xuICAgICAgICBwLnggPSB4ICogYysrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGFkZFBvaW50KCl7XG4gICAgICB0aGlzLnNlcmllcy5wdXNoKCBuZXcgUG9pbnQoYCR7dGhpcy5zZXJpZXMubGVuZ3RoKzF9LmAsIDAsIHJhbmRJbnQoMCwgNTAwKSwgKCkgPT4gdGhpcy51cGRhdGVQb2ludHMoKSkpO1xuICAgICAgdGhpcy51cGRhdGVBYnNjaXNzYSgpO1xuICAgICAgdGhpcy51cGRhdGVQb2ludHMoKTtcbiAgICB9XG5cbiAgICByZW1vdmVQb2ludCgpe1xuICAgICAgdGhpcy5zZXJpZXMucG9wKCk7XG4gICAgICB0aGlzLnVwZGF0ZUFic2Npc3NhKCk7XG4gICAgICB0aGlzLnVwZGF0ZVBvaW50cygpO1xuICAgIH1cblxufVxuXG5mdW5jdGlvbiByYW5kSW50KG1pbiwgbWF4KXtcbiAgcmV0dXJuIChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==