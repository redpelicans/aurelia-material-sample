System.register(['aurelia-framework', 'jquery'], function (_export) {
  'use strict';

  var bindable, customElement, inject, $, TableCustomElement;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
      customElement = _aureliaFramework.customElement;
      inject = _aureliaFramework.inject;
    }, function (_jquery) {
      $ = _jquery['default'];
    }],
    execute: function () {
      TableCustomElement = (function () {
        function TableCustomElement() {
          _classCallCheck(this, _TableCustomElement);
        }

        var _TableCustomElement = TableCustomElement;
        TableCustomElement = customElement('table')(TableCustomElement) || TableCustomElement;
        return TableCustomElement;
      })();

      _export('TableCustomElement', TableCustomElement);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OzswQ0FJYSxrQkFBa0I7Ozs7OzttQ0FKdkIsUUFBUTt3Q0FBRSxhQUFhO2lDQUFFLE1BQU07Ozs7O0FBSTFCLHdCQUFrQjtpQkFBbEIsa0JBQWtCOzs7O2tDQUFsQixrQkFBa0I7QUFBbEIsMEJBQWtCLEdBRDlCLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FDVixrQkFBa0IsS0FBbEIsa0JBQWtCO2VBQWxCLGtCQUFrQjs7O29DQUFsQixrQkFBa0IiLCJmaWxlIjoidGFibGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2JpbmRhYmxlLCBjdXN0b21FbGVtZW50LCBpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbkBjdXN0b21FbGVtZW50KCd0YWJsZScpXG5leHBvcnQgY2xhc3MgVGFibGVDdXN0b21FbGVtZW50IHtcblxufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=