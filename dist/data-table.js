System.register(['aurelia-framework', 'jquery'], function (_export) {
  'use strict';

  var bindable, customElement, $, DataTableCustomElement;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer.call(target); Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
      customElement = _aureliaFramework.customElement;
    }, function (_jquery) {
      $ = _jquery['default'];
    }],
    execute: function () {
      DataTableCustomElement = (function () {
        var _instanceInitializers = {};

        function DataTableCustomElement() {
          _classCallCheck(this, _DataTableCustomElement);

          _defineDecoratedPropertyDescriptor(this, 'series', _instanceInitializers);
        }

        _createDecoratedClass(DataTableCustomElement, [{
          key: 'attached',
          value: function attached() {
            console.log('Attached');
            console.log(this.series);
          }
        }, {
          key: 'series',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }], null, _instanceInitializers);

        var _DataTableCustomElement = DataTableCustomElement;
        DataTableCustomElement = customElement('data-table')(DataTableCustomElement) || DataTableCustomElement;
        return DataTableCustomElement;
      })();

      _export('DataTableCustomElement', DataTableCustomElement);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEtdGFibGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O2tDQUlhLHNCQUFzQjs7Ozs7Ozs7OzttQ0FKM0IsUUFBUTt3Q0FBRSxhQUFhOzs7OztBQUlsQiw0QkFBc0I7OztpQkFBdEIsc0JBQXNCOzs7Ozs7OEJBQXRCLHNCQUFzQjs7aUJBR3pCLG9CQUFFO0FBQ1IsbUJBQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUE7QUFDdkIsbUJBQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1dBQ3pCOzs7dUJBTEEsUUFBUTs7Ozs7c0NBREUsc0JBQXNCO0FBQXRCLDhCQUFzQixHQURsQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQ2Ysc0JBQXNCLEtBQXRCLHNCQUFzQjtlQUF0QixzQkFBc0I7Ozt3Q0FBdEIsc0JBQXNCIiwiZmlsZSI6ImRhdGEtdGFibGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2JpbmRhYmxlLCBjdXN0b21FbGVtZW50fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5AY3VzdG9tRWxlbWVudCgnZGF0YS10YWJsZScpXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlQ3VzdG9tRWxlbWVudCB7XG4gIEBiaW5kYWJsZSBzZXJpZXM7XG5cbiAgYXR0YWNoZWQoKXtcbiAgICBjb25zb2xlLmxvZyhcIkF0dGFjaGVkXCIpXG4gICAgY29uc29sZS5sb2codGhpcy5zZXJpZXMpXG4gIH1cblxufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=