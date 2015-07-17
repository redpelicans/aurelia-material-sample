'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _aureliaFramework = require('aurelia-framework');

var _materialDesignLite = require('material-design-lite');

require('material-design-lite/material.css!');

console.log('mdl====>');
console.log(_materialDesignLite.componentHandler);

var MDL = (function () {
  function MDL(element) {
    _classCallCheck(this, _MDL);

    this.element = element;
  }

  var _MDL = MDL;

  _createClass(_MDL, [{
    key: 'attached',
    value: function attached() {
      console.log('mdl attached: ' + this.value);
      console.log(this.element);
      switch (this.value) {
        case 'button':
          _materialDesignLite.componentHandler.upgradeElement(this.element, 'MaterialButton');
          _materialDesignLite.componentHandler.upgradeElement(this.element, 'MaterialRipple');
          break;
        case 'textfield':
          _materialDesignLite.componentHandler.upgradeElement(this.element, 'MaterialTextfield');
          break;
      }
    }
  }]);

  MDL = (0, _aureliaFramework.customAttribute)('mdl')(MDL) || MDL;
  MDL = (0, _aureliaFramework.inject)(Element)(MDL) || MDL;
  return MDL;
})();

exports.MDL = MDL;
//# sourceMappingURL=../resources/mdl.js.map