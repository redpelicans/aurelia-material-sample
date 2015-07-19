System.register(['aurelia-framework'], function (_export) {
  'use strict';

  var bindable, customElement, PieCustomElement;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return {
    setters: [function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
      customElement = _aureliaFramework.customElement;
    }],
    execute: function () {
      PieCustomElement = (function () {
        function PieCustomElement(element) {
          _classCallCheck(this, _PieCustomElement);

          this.percentage = randInt(1, 100);
          this.setPath.apply(this, _toConsumableArray(this.getCoordinates()));
          this.action = 'Stop';
        }

        _createClass(PieCustomElement, [{
          key: 'reset',
          value: function reset() {
            if (this.timeoutID) window.clearTimeout(this.timeoutID);
            this.updatePercentage(50);
            this.changePercentage(false);
          }
        }, {
          key: 'setPath',
          value: function setPath(x, y) {
            this.path = 'M 0.5 0.5 0.5 0 A 0.5 0.5 0 ' + (this.percentage < 50 ? 1 : 0) + ' 1 ' + x + ' ' + y + ' z';
          }
        }, {
          key: 'runningChanged',
          value: function runningChanged() {
            if (this.running) this.changePercentage();
            this.action = this.running ? 'Stop' : 'Start';
          }
        }, {
          key: 'getCoordinates',
          value: function getCoordinates() {
            var angle = (90 + this.percentage * 360 / 100) * Math.PI / 180;
            var x = Math.cos(angle);
            var y = Math.sin(angle);

            return [x / 2 + 0.5, -y / 2 + 0.5];
          }
        }, {
          key: 'updatePercentage',
          value: function updatePercentage(value) {
            this.percentage = value || Math.max(1, Math.min(this.percentage + randInt(-10, 10), 100));
            this.setPath.apply(this, _toConsumableArray(this.getCoordinates()));
          }
        }, {
          key: 'changePercentage',
          value: function changePercentage() {
            var update = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

            if (this.running) {
              if (update) this.updatePercentage();
              this.timeoutID = window.setTimeout(this.changePercentage.bind(this), 500);
            }
          }
        }, {
          key: 'attached',
          value: function attached() {
            this.changePercentage();
          }
        }]);

        var _PieCustomElement = PieCustomElement;
        PieCustomElement = bindable('running')(PieCustomElement) || PieCustomElement;
        PieCustomElement = customElement('pie')(PieCustomElement) || PieCustomElement;
        return PieCustomElement;
      })();

      _export('PieCustomElement', PieCustomElement);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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Ozs7aUJBRU8sb0JBQUc7QUFDVCxnQkFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7V0FDekI7OztnQ0EzQ1EsZ0JBQWdCO0FBQWhCLHdCQUFnQixHQUQ1QixRQUFRLENBQUMsU0FBUyxDQUFDLENBQ1AsZ0JBQWdCLEtBQWhCLGdCQUFnQjtBQUFoQix3QkFBZ0IsR0FGNUIsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUVSLGdCQUFnQixLQUFoQixnQkFBZ0I7ZUFBaEIsZ0JBQWdCOzs7a0NBQWhCLGdCQUFnQiIsImZpbGUiOiJwaWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2JpbmRhYmxlLCBjdXN0b21FbGVtZW50fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbkBjdXN0b21FbGVtZW50KCdwaWUnKVxuQGJpbmRhYmxlKCdydW5uaW5nJylcbmV4cG9ydCBjbGFzcyBQaWVDdXN0b21FbGVtZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5wZXJjZW50YWdlID0gcmFuZEludCgxLCAxMDApO1xuICAgICAgICB0aGlzLnNldFBhdGgoLi4udGhpcy5nZXRDb29yZGluYXRlcygpKTtcbiAgICAgICAgdGhpcy5hY3Rpb249J1N0b3AnO1xuICAgICB9XG5cbiAgICByZXNldCgpe1xuICAgICAgaWYodGhpcy50aW1lb3V0SUQpIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy50aW1lb3V0SUQpO1xuICAgICAgdGhpcy51cGRhdGVQZXJjZW50YWdlKDUwKTtcbiAgICAgIHRoaXMuY2hhbmdlUGVyY2VudGFnZShmYWxzZSk7XG4gICAgfVxuXG4gICAgc2V0UGF0aCh4LHkpe1xuICAgICAgdGhpcy5wYXRoID0gYE0gMC41IDAuNSAwLjUgMCBBIDAuNSAwLjUgMCAke3RoaXMucGVyY2VudGFnZSA8IDUwID8gMSA6IDB9IDEgJHt4fSAke3l9IHpgO1xuICAgIH1cblxuICAgIHJ1bm5pbmdDaGFuZ2VkKCl7XG4gICAgICBpZih0aGlzLnJ1bm5pbmcpIHRoaXMuY2hhbmdlUGVyY2VudGFnZSgpO1xuICAgICAgdGhpcy5hY3Rpb24gPSB0aGlzLnJ1bm5pbmcgPyAnU3RvcCcgOiAnU3RhcnQnO1xuICAgIH1cblxuICAgIGdldENvb3JkaW5hdGVzKCl7XG4gICAgICBsZXQgYW5nbGUgPSAoOTAgKyB0aGlzLnBlcmNlbnRhZ2UgKiAzNjAgLyAxMDApICogTWF0aC5QSSAvIDE4MDtcbiAgICAgIGxldCBbeCwgeV0gPSBbTWF0aC5jb3MoYW5nbGUpLCBNYXRoLnNpbihhbmdsZSldO1xuICAgICAgcmV0dXJuIFt4LzIrMC41LCAteS8yKzAuNV07XG4gICAgfVxuXG4gICAgdXBkYXRlUGVyY2VudGFnZSh2YWx1ZSl7XG4gICAgICB0aGlzLnBlcmNlbnRhZ2UgPSB2YWx1ZSB8fCBNYXRoLm1heCgxLCBNYXRoLm1pbih0aGlzLnBlcmNlbnRhZ2UgKyByYW5kSW50KC0xMCwgMTApLCAxMDApKTtcbiAgICAgIHRoaXMuc2V0UGF0aCguLi50aGlzLmdldENvb3JkaW5hdGVzKCkpO1xuICAgIH1cblxuICAgIGNoYW5nZVBlcmNlbnRhZ2UodXBkYXRlPXRydWUpe1xuICAgICAgaWYodGhpcy5ydW5uaW5nKXtcbiAgICAgICAgaWYodXBkYXRlKSB0aGlzLnVwZGF0ZVBlcmNlbnRhZ2UoKTtcbiAgICAgICAgdGhpcy50aW1lb3V0SUQgPSB3aW5kb3cuc2V0VGltZW91dCh0aGlzLmNoYW5nZVBlcmNlbnRhZ2UuYmluZCh0aGlzKSwgNTAwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhdHRhY2hlZCgpIHtcbiAgICAgIHRoaXMuY2hhbmdlUGVyY2VudGFnZSgpO1xuICAgIH1cblxufVxuXG5mdW5jdGlvbiByYW5kSW50KG1pbiwgbWF4KXtcbiAgcmV0dXJuIChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==