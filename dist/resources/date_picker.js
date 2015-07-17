System.register(['aurelia-framework', 'moment', 'eonasdan/bootstrap-datetimepicker', 'eonasdan/bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css!'], function (_export) {
    'use strict';

    var inject, customElement, bindable, moment, datepicker, DatePicker;

    var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer.call(target); Object.defineProperty(target, key, descriptor); }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
            customElement = _aureliaFramework.customElement;
            bindable = _aureliaFramework.bindable;
        }, function (_moment) {
            moment = _moment['default'];
        }, function (_eonasdanBootstrapDatetimepicker) {
            datepicker = _eonasdanBootstrapDatetimepicker.datepicker;
        }, function (_eonasdanBootstrapDatetimepickerBuildCssBootstrapDatetimepickerMinCss) {}],
        execute: function () {
            DatePicker = (function () {
                var _instanceInitializers = {};
                var _instanceInitializers = {};

                _createDecoratedClass(DatePicker, [{
                    key: 'format',
                    decorators: [bindable],
                    initializer: function initializer() {
                        return 'DD/MM/YYYY';
                    },
                    enumerable: true
                }], null, _instanceInitializers);

                function DatePicker(element) {
                    _classCallCheck(this, _DatePicker);

                    _defineDecoratedPropertyDescriptor(this, 'format', _instanceInitializers);

                    this.element = element;
                }

                _createDecoratedClass(DatePicker, [{
                    key: 'attached',
                    value: function attached() {
                        var _this = this;

                        this.datePicker = $(this.element).find('.input-group.date').datetimepicker({
                            format: this.format,
                            defaultDate: this.value,
                            showClose: true,
                            showTodayButton: true
                        });

                        this.datePicker.on('dp.change', function (e) {
                            _this.value = e.date.toDate();
                            $(_this.element).trigger('change');
                        });
                    }
                }], null, _instanceInitializers);

                var _DatePicker = DatePicker;
                DatePicker = customElement('date-picker')(DatePicker) || DatePicker;
                DatePicker = bindable('value')(DatePicker) || DatePicker;
                DatePicker = inject(Element)(DatePicker) || DatePicker;
                return DatePicker;
            })();

            _export('DatePicker', DatePicker);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9kYXRlX3BpY2tlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7NkRBUWEsVUFBVTs7Ozs7Ozs7Ozt1Q0FSZixNQUFNOzhDQUFFLGFBQWE7eUNBQUUsUUFBUTs7OzswREFFL0IsVUFBVTs7O0FBTUwsc0JBQVU7Ozs7c0NBQVYsVUFBVTs7aUNBRWxCLFFBQVE7OytCQUFVLFlBQVk7Ozs7O0FBRXBCLHlCQUpGLFVBQVUsQ0FJUCxPQUFPLEVBQUU7Ozs7O0FBQ2pCLHdCQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztpQkFDekI7O3NDQU5PLFVBQVU7OzJCQVFYLG9CQUFHOzs7QUFDVCw0QkFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUN0RCxjQUFjLENBQUM7QUFDWixrQ0FBTSxFQUFFLElBQUksQ0FBQyxNQUFNO0FBQ25CLHVDQUFXLEVBQUUsSUFBSSxDQUFDLEtBQUs7QUFDdkIscUNBQVMsRUFBRSxJQUFJO0FBQ2YsMkNBQWUsRUFBRSxJQUFJO3lCQUN4QixDQUFDLENBQUM7O0FBRVAsNEJBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxVQUFDLENBQUMsRUFBSztBQUNyQyxrQ0FBSyxLQUFLLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUM3Qiw2QkFBQyxDQUFDLE1BQUssT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO3lCQUNuQyxDQUFDLENBQUM7cUJBQ0o7OztrQ0FyQlEsVUFBVTtBQUFWLDBCQUFVLEdBRHRCLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FDaEIsVUFBVSxLQUFWLFVBQVU7QUFBViwwQkFBVSxHQUZ0QixRQUFRLENBQUMsT0FBTyxDQUFDLENBRUwsVUFBVSxLQUFWLFVBQVU7QUFBViwwQkFBVSxHQUh0QixNQUFNLENBQUMsT0FBTyxDQUFDLENBR0gsVUFBVSxLQUFWLFVBQVU7dUJBQVYsVUFBVTs7O2tDQUFWLFVBQVUiLCJmaWxlIjoicmVzb3VyY2VzL2RhdGVfcGlja2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3QsIGN1c3RvbUVsZW1lbnQsIGJpbmRhYmxlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQge2RhdGVwaWNrZXJ9IGZyb20gJ2VvbmFzZGFuL2Jvb3RzdHJhcC1kYXRldGltZXBpY2tlcic7XG5pbXBvcnQgJ2VvbmFzZGFuL2Jvb3RzdHJhcC1kYXRldGltZXBpY2tlci9idWlsZC9jc3MvYm9vdHN0cmFwLWRhdGV0aW1lcGlja2VyLm1pbi5jc3MhJztcblxuQGluamVjdChFbGVtZW50KVxuQGJpbmRhYmxlKFwidmFsdWVcIilcbkBjdXN0b21FbGVtZW50KCdkYXRlLXBpY2tlcicpXG5leHBvcnQgY2xhc3MgRGF0ZVBpY2tlciB7XG5cbiAgICBAYmluZGFibGUgZm9ybWF0ID0gXCJERC9NTS9ZWVlZXCI7XG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgIH1cblxuICAgIGF0dGFjaGVkKCkge1xuICAgICAgdGhpcy5kYXRlUGlja2VyID0gJCh0aGlzLmVsZW1lbnQpLmZpbmQoJy5pbnB1dC1ncm91cC5kYXRlJylcbiAgICAgICAgICAuZGF0ZXRpbWVwaWNrZXIoe1xuICAgICAgICAgICAgICBmb3JtYXQ6IHRoaXMuZm9ybWF0LFxuICAgICAgICAgICAgICBkZWZhdWx0RGF0ZTogdGhpcy52YWx1ZSxcbiAgICAgICAgICAgICAgc2hvd0Nsb3NlOiB0cnVlLFxuICAgICAgICAgICAgICBzaG93VG9kYXlCdXR0b246IHRydWVcbiAgICAgICAgICB9KTtcblxuICAgICAgdGhpcy5kYXRlUGlja2VyLm9uKFwiZHAuY2hhbmdlXCIsIChlKSA9PiB7XG4gICAgICAgIHRoaXMudmFsdWUgPSBlLmRhdGUudG9EYXRlKCk7XG4gICAgICAgICQodGhpcy5lbGVtZW50KS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgIH0pO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==