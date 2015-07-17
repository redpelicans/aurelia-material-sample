System.register(['aurelia-framework', 'moment', 'eonasdan/bootstrap-datetimepicker', 'eonasdan/bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css!'], function (_export) {
    'use strict';

    var inject, customElement, bindable, moment, datepicker, PeriodPicker;

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
            PeriodPicker = (function () {
                var _instanceInitializers = {};
                var _instanceInitializers = {};

                _createDecoratedClass(PeriodPicker, [{
                    key: 'format',
                    decorators: [bindable],
                    initializer: function initializer() {
                        return 'DD/MM/YYYY';
                    },
                    enumerable: true
                }, {
                    key: 'from',
                    decorators: [bindable],
                    initializer: null,
                    enumerable: true
                }, {
                    key: 'to',
                    decorators: [bindable],
                    initializer: null,
                    enumerable: true
                }], null, _instanceInitializers);

                function PeriodPicker(element) {
                    _classCallCheck(this, _PeriodPicker);

                    _defineDecoratedPropertyDescriptor(this, 'format', _instanceInitializers);

                    _defineDecoratedPropertyDescriptor(this, 'from', _instanceInitializers);

                    _defineDecoratedPropertyDescriptor(this, 'to', _instanceInitializers);

                    this.element = element;
                }

                _createDecoratedClass(PeriodPicker, [{
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
                }], null, _instanceInitializers);

                var _PeriodPicker = PeriodPicker;
                PeriodPicker = customElement('period-picker')(PeriodPicker) || PeriodPicker;
                PeriodPicker = inject(Element)(PeriodPicker) || PeriodPicker;
                return PeriodPicker;
            })();

            _export('PeriodPicker', PeriodPicker);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9wZXJpb2RfcGlja2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs2REFPYSxZQUFZOzs7Ozs7Ozs7O3VDQVBqQixNQUFNOzhDQUFFLGFBQWE7eUNBQUUsUUFBUTs7OzswREFFL0IsVUFBVTs7O0FBS0wsd0JBQVk7Ozs7c0NBQVosWUFBWTs7aUNBRXBCLFFBQVE7OytCQUFVLFlBQVk7Ozs7O2lDQUM5QixRQUFROzs7OztpQ0FDUixRQUFROzs7OztBQUVFLHlCQU5GLFlBQVksQ0FNVCxPQUFPLEVBQUU7Ozs7Ozs7OztBQUNqQix3QkFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7aUJBQ3pCOztzQ0FSTyxZQUFZOzsyQkFVYixvQkFBRzs7O0FBQ1QsNEJBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FDdEQsY0FBYyxDQUFDO0FBQ1osa0NBQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtBQUNuQix1Q0FBVyxFQUFFLElBQUksQ0FBQyxJQUFJO0FBQ3RCLHFDQUFTLEVBQUUsSUFBSTtBQUNmLDJDQUFlLEVBQUUsSUFBSTt5QkFDeEIsQ0FBQyxDQUFDOztBQUVQLDRCQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQ2xELGNBQWMsQ0FBQztBQUNaLGtDQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07QUFDbkIsdUNBQVcsRUFBRSxJQUFJLENBQUMsRUFBRTtBQUNwQixxQ0FBUyxFQUFFLElBQUk7QUFDZiwyQ0FBZSxFQUFFLElBQUk7eUJBQ3hCLENBQUMsQ0FBQzs7QUFFUCw0QkFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLFVBQUMsQ0FBQyxFQUFLO0FBQ3JDLGtDQUFLLFFBQVEsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3JELGtDQUFLLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQzVCLDZCQUFDLENBQUMsTUFBSyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7eUJBQ25DLENBQUMsQ0FBQzs7QUFFSCw0QkFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLFVBQUMsQ0FBQyxFQUFLO0FBQ25DLGtDQUFLLFVBQVUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3ZELGtDQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQzFCLDZCQUFDLENBQUMsTUFBSyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7eUJBQ25DLENBQUMsQ0FBQztxQkFFSjs7O29DQXZDUSxZQUFZO0FBQVosNEJBQVksR0FEeEIsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUNsQixZQUFZLEtBQVosWUFBWTtBQUFaLDRCQUFZLEdBRnhCLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FFSCxZQUFZLEtBQVosWUFBWTt1QkFBWixZQUFZOzs7b0NBQVosWUFBWSIsImZpbGUiOiJyZXNvdXJjZXMvcGVyaW9kX3BpY2tlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0LCBjdXN0b21FbGVtZW50LCBiaW5kYWJsZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHtkYXRlcGlja2VyfSBmcm9tICdlb25hc2Rhbi9ib290c3RyYXAtZGF0ZXRpbWVwaWNrZXInO1xuaW1wb3J0ICdlb25hc2Rhbi9ib290c3RyYXAtZGF0ZXRpbWVwaWNrZXIvYnVpbGQvY3NzL2Jvb3RzdHJhcC1kYXRldGltZXBpY2tlci5taW4uY3NzISc7XG5cbkBpbmplY3QoRWxlbWVudClcbkBjdXN0b21FbGVtZW50KCdwZXJpb2QtcGlja2VyJylcbmV4cG9ydCBjbGFzcyBQZXJpb2RQaWNrZXIge1xuXG4gICAgQGJpbmRhYmxlIGZvcm1hdCA9IFwiREQvTU0vWVlZWVwiO1xuICAgIEBiaW5kYWJsZSBmcm9tO1xuICAgIEBiaW5kYWJsZSB0bztcblxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgfVxuXG4gICAgYXR0YWNoZWQoKSB7XG4gICAgICB0aGlzLmZyb21QaWNrZXIgPSAkKHRoaXMuZWxlbWVudCkuZmluZCgnLmlucHV0LWdyb3VwLmZyb20nKVxuICAgICAgICAgIC5kYXRldGltZXBpY2tlcih7XG4gICAgICAgICAgICAgIGZvcm1hdDogdGhpcy5mb3JtYXQsXG4gICAgICAgICAgICAgIGRlZmF1bHREYXRlOiB0aGlzLmZyb20sXG4gICAgICAgICAgICAgIHNob3dDbG9zZTogdHJ1ZSxcbiAgICAgICAgICAgICAgc2hvd1RvZGF5QnV0dG9uOiB0cnVlXG4gICAgICAgICAgfSk7XG5cbiAgICAgIHRoaXMudG9QaWNrZXIgPSAkKHRoaXMuZWxlbWVudCkuZmluZCgnLmlucHV0LWdyb3VwLnRvJylcbiAgICAgICAgICAuZGF0ZXRpbWVwaWNrZXIoe1xuICAgICAgICAgICAgICBmb3JtYXQ6IHRoaXMuZm9ybWF0LFxuICAgICAgICAgICAgICBkZWZhdWx0RGF0ZTogdGhpcy50byxcbiAgICAgICAgICAgICAgc2hvd0Nsb3NlOiB0cnVlLFxuICAgICAgICAgICAgICBzaG93VG9kYXlCdXR0b246IHRydWVcbiAgICAgICAgICB9KTtcblxuICAgICAgdGhpcy5mcm9tUGlja2VyLm9uKFwiZHAuY2hhbmdlXCIsIChlKSA9PiB7XG4gICAgICAgIHRoaXMudG9QaWNrZXIuZGF0YShcIkRhdGVUaW1lUGlja2VyXCIpLm1pbkRhdGUoZS5kYXRlKTtcbiAgICAgICAgdGhpcy5mcm9tID0gZS5kYXRlLnRvRGF0ZSgpO1xuICAgICAgICAkKHRoaXMuZWxlbWVudCkudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy50b1BpY2tlci5vbihcImRwLmNoYW5nZVwiLCAoZSkgPT4ge1xuICAgICAgICB0aGlzLmZyb21QaWNrZXIuZGF0YShcIkRhdGVUaW1lUGlja2VyXCIpLm1heERhdGUoZS5kYXRlKTtcbiAgICAgICAgdGhpcy50byA9IGUuZGF0ZS50b0RhdGUoKTtcbiAgICAgICAgJCh0aGlzLmVsZW1lbnQpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgfSk7XG5cbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=