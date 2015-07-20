System.register(['aurelia-framework', 'jquery'], function (_export) {
  'use strict';

  var bindable, customElement, inject, $, DataTableCustomElement;

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
      DataTableCustomElement = (function () {
        function DataTableCustomElement() {
          _classCallCheck(this, _DataTableCustomElement);
        }

        var _DataTableCustomElement = DataTableCustomElement;
        DataTableCustomElement = customElement('data-table')(DataTableCustomElement) || DataTableCustomElement;
        return DataTableCustomElement;
      })();

      _export('DataTableCustomElement', DataTableCustomElement);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGFUYWJsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7MENBSWEsc0JBQXNCOzs7Ozs7bUNBSjNCLFFBQVE7d0NBQUUsYUFBYTtpQ0FBRSxNQUFNOzs7OztBQUkxQiw0QkFBc0I7aUJBQXRCLHNCQUFzQjs7OztzQ0FBdEIsc0JBQXNCO0FBQXRCLDhCQUFzQixHQURsQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQ2Ysc0JBQXNCLEtBQXRCLHNCQUFzQjtlQUF0QixzQkFBc0I7Ozt3Q0FBdEIsc0JBQXNCIiwiZmlsZSI6ImRhdGFUYWJsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YmluZGFibGUsIGN1c3RvbUVsZW1lbnQsIGluamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuQGN1c3RvbUVsZW1lbnQoJ2RhdGEtdGFibGUnKVxuZXhwb3J0IGNsYXNzIERhdGFUYWJsZUN1c3RvbUVsZW1lbnQge1xuXG59XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==