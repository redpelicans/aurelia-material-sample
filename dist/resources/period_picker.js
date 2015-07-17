'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer.call(target); Object.defineProperty(target, key, descriptor); }

var _aureliaFramework = require('aurelia-framework');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _eonasdanBootstrapDatetimepicker = require('eonasdan/bootstrap-datetimepicker');

require('eonasdan/bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css!');

var PeriodPicker = (function () {
    var _instanceInitializers = {};

    function PeriodPicker(element) {
        _classCallCheck(this, _PeriodPicker);

        _defineDecoratedPropertyDescriptor(this, 'format', _instanceInitializers);

        _defineDecoratedPropertyDescriptor(this, 'from', _instanceInitializers);

        _defineDecoratedPropertyDescriptor(this, 'to', _instanceInitializers);

        this.element = element;
    }

    var _PeriodPicker = PeriodPicker;

    _createDecoratedClass(_PeriodPicker, [{
        key: 'attached',
        value: function attached() {
            var _this = this;

            this.fromPicker = $(this.element).find('.input-group.from').datetimepicker({
                format: this.format,
                defaultDate: this.from,
                showClose: true,
                showTodayButton: true
            });

            this.toPicker = $(this.element).find('.input-group.to').datetimepicker({
                format: this.format,
                defaultDate: this.to,
                showClose: true,
                showTodayButton: true
            });

            this.fromPicker.on('dp.change', function (e) {
                _this.toPicker.data('DateTimePicker').minDate(e.date);
                _this.from = e.date.toDate();
                $(_this.element).trigger('change');
            });

            this.toPicker.on('dp.change', function (e) {
                _this.fromPicker.data('DateTimePicker').maxDate(e.date);
                _this.to = e.date.toDate();
                $(_this.element).trigger('change');
            });
        }
    }, {
        key: 'format',
        decorators: [_aureliaFramework.bindable],
        initializer: function initializer() {
            return 'DD/MM/YYYY';
        },
        enumerable: true
    }, {
        key: 'from',
        decorators: [_aureliaFramework.bindable],
        initializer: null,
        enumerable: true
    }, {
        key: 'to',
        decorators: [_aureliaFramework.bindable],
        initializer: null,
        enumerable: true
    }], null, _instanceInitializers);

    PeriodPicker = (0, _aureliaFramework.customElement)('period-picker')(PeriodPicker) || PeriodPicker;
    PeriodPicker = (0, _aureliaFramework.inject)(Element)(PeriodPicker) || PeriodPicker;
    return PeriodPicker;
})();

exports.PeriodPicker = PeriodPicker;
//# sourceMappingURL=../resources/period_picker.js.map