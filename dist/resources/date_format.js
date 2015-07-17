System.register(['moment'], function (_export) {
  'use strict';

  var moment, DateFormatValueConverter;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_moment) {
      moment = _moment['default'];
    }],
    execute: function () {
      DateFormatValueConverter = (function () {
        function DateFormatValueConverter() {
          _classCallCheck(this, DateFormatValueConverter);
        }

        _createClass(DateFormatValueConverter, [{
          key: 'toView',
          value: function toView(value, format) {
            return moment(value).format(format);
          }
        }]);

        return DateFormatValueConverter;
      })();

      _export('DateFormatValueConverter', DateFormatValueConverter);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9kYXRlX2Zvcm1hdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Y0FFYSx3QkFBd0I7Ozs7Ozs7Ozs7O0FBQXhCLDhCQUF3QjtpQkFBeEIsd0JBQXdCO2dDQUF4Qix3QkFBd0I7OztxQkFBeEIsd0JBQXdCOztpQkFDNUIsZ0JBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRTtBQUNwQixtQkFBTyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1dBQ3JDOzs7ZUFIUyx3QkFBd0I7OzswQ0FBeEIsd0JBQXdCIiwiZmlsZSI6InJlc291cmNlcy9kYXRlX2Zvcm1hdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuZXhwb3J0IGNsYXNzIERhdGVGb3JtYXRWYWx1ZUNvbnZlcnRlciB7XG4gICB0b1ZpZXcodmFsdWUsIGZvcm1hdCkge1xuICAgICByZXR1cm4gbW9tZW50KHZhbHVlKS5mb3JtYXQoZm9ybWF0KTtcbiAgIH1cblxuICAgLy8gZnJvbVZpZXcoc3RyLCBmb3JtYXQpe1xuICAgLy8gICBjb25zb2xlLmxvZyhgZnJvbVZpZXcoJHtzdHJ9KWApXG4gICAvLyAgIGlmKHN0ci5sZW5ndGggIT0gZm9ybWF0Lmxlbmd0aClyZXR1cm47XG4gICAvLyAgIHJldHVybiBtb21lbnQoc3RyLCBmb3JtYXQpLnRvRGF0ZSgpO1xuICAgLy8gfVxuIH1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==