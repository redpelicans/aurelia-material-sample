"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var DateFormat2ValueConverter = (function () {
  function DateFormat2ValueConverter() {
    _classCallCheck(this, DateFormat2ValueConverter);
  }

  _createClass(DateFormat2ValueConverter, [{
    key: "toView",
    value: function toView(value, format) {
      console.log("toView(" + value + ")");
      if (!format) format = "DD/MM/YYYY";
      return (0, _moment2["default"])(value).format(format);
    }
  }]);

  return DateFormat2ValueConverter;
})();

exports.DateFormat2ValueConverter = DateFormat2ValueConverter;
//# sourceMappingURL=../resources/date_format2.js.map