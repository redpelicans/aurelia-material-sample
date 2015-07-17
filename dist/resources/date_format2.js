System.register(["moment"], function (_export) {
  "use strict";

  var moment, DateFormat2ValueConverter;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  return {
    setters: [function (_moment) {
      moment = _moment["default"];
    }],
    execute: function () {
      DateFormat2ValueConverter = (function () {
        function DateFormat2ValueConverter() {
          _classCallCheck(this, DateFormat2ValueConverter);
        }

        _createClass(DateFormat2ValueConverter, [{
          key: "toView",
          value: function toView(value, format) {
            console.log("toView(" + value + ")");
            if (!format) format = "DD/MM/YYYY";
            return moment(value).format(format);
          }
        }]);

        return DateFormat2ValueConverter;
      })();

      _export("DateFormat2ValueConverter", DateFormat2ValueConverter);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9kYXRlX2Zvcm1hdDIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O2NBRWEseUJBQXlCOzs7Ozs7Ozs7OztBQUF6QiwrQkFBeUI7aUJBQXpCLHlCQUF5QjtnQ0FBekIseUJBQXlCOzs7cUJBQXpCLHlCQUF5Qjs7aUJBQzdCLGdCQUFDLEtBQUssRUFBRSxNQUFNLEVBQUU7QUFDcEIsbUJBQU8sQ0FBQyxHQUFHLGFBQVcsS0FBSyxPQUFJLENBQUE7QUFDL0IsZ0JBQUcsQ0FBQyxNQUFNLEVBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQztBQUNqQyxtQkFBTyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1dBQ3JDOzs7ZUFMUyx5QkFBeUI7OzsyQ0FBekIseUJBQXlCIiwiZmlsZSI6InJlc291cmNlcy9kYXRlX2Zvcm1hdDIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5cbmV4cG9ydCBjbGFzcyBEYXRlRm9ybWF0MlZhbHVlQ29udmVydGVyIHtcbiAgIHRvVmlldyh2YWx1ZSwgZm9ybWF0KSB7XG4gICAgIGNvbnNvbGUubG9nKGB0b1ZpZXcoJHt2YWx1ZX0pYClcbiAgICAgaWYoIWZvcm1hdClmb3JtYXQgPSBcIkREL01NL1lZWVlcIjtcbiAgICAgcmV0dXJuIG1vbWVudCh2YWx1ZSkuZm9ybWF0KGZvcm1hdCk7XG4gICB9XG5cbiB9XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=