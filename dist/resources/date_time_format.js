System.register(['moment'], function (_export) {
  'use strict';

  var moment, DateTimeFormatValueConverter;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_moment) {
      moment = _moment['default'];
    }],
    execute: function () {
      DateTimeFormatValueConverter = (function () {
        function DateTimeFormatValueConverter() {
          _classCallCheck(this, DateTimeFormatValueConverter);
        }

        _createClass(DateTimeFormatValueConverter, [{
          key: 'toView',
          value: function toView(value, format) {
            return moment(value).format(format);
          }
        }]);

        return DateTimeFormatValueConverter;
      })();

      _export('DateTimeFormatValueConverter', DateTimeFormatValueConverter);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9kYXRlX3RpbWVfZm9ybWF0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztjQUVhLDRCQUE0Qjs7Ozs7Ozs7Ozs7QUFBNUIsa0NBQTRCO2lCQUE1Qiw0QkFBNEI7Z0NBQTVCLDRCQUE0Qjs7O3FCQUE1Qiw0QkFBNEI7O2lCQUNoQyxnQkFBQyxLQUFLLEVBQUUsTUFBTSxFQUFFO0FBQ3BCLG1CQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7V0FDckM7OztlQUhTLDRCQUE0Qjs7OzhDQUE1Qiw0QkFBNEIiLCJmaWxlIjoicmVzb3VyY2VzL2RhdGVfdGltZV9mb3JtYXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5cbmV4cG9ydCBjbGFzcyBEYXRlVGltZUZvcm1hdFZhbHVlQ29udmVydGVyIHtcbiAgIHRvVmlldyh2YWx1ZSwgZm9ybWF0KSB7XG4gICAgIHJldHVybiBtb21lbnQodmFsdWUpLmZvcm1hdChmb3JtYXQpO1xuICAgfVxuXG4gfVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9