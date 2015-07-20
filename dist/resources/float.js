System.register([], function (_export) {
  "use strict";

  var FloatValueConverter;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  return {
    setters: [],
    execute: function () {
      FloatValueConverter = (function () {
        function FloatValueConverter() {
          _classCallCheck(this, FloatValueConverter);
        }

        _createClass(FloatValueConverter, [{
          key: "toView",
          value: function toView(value, format) {
            return Number(value).toFixed(2);
          }
        }]);

        return FloatValueConverter;
      })();

      _export("FloatValueConverter", FloatValueConverter);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9mbG9hdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBYSxtQkFBbUI7Ozs7Ozs7OztBQUFuQix5QkFBbUI7aUJBQW5CLG1CQUFtQjtnQ0FBbkIsbUJBQW1COzs7cUJBQW5CLG1CQUFtQjs7aUJBQ3ZCLGdCQUFDLEtBQUssRUFBRSxNQUFNLEVBQUU7QUFDcEIsbUJBQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztXQUNqQzs7O2VBSFMsbUJBQW1COzs7cUNBQW5CLG1CQUFtQiIsImZpbGUiOiJyZXNvdXJjZXMvZmxvYXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRmxvYXRWYWx1ZUNvbnZlcnRlciB7XG4gICB0b1ZpZXcodmFsdWUsIGZvcm1hdCkge1xuICAgICByZXR1cm4gTnVtYmVyKHZhbHVlKS50b0ZpeGVkKDIpO1xuICAgfVxuIH1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==