import {inject, customElement, bindable} from 'aurelia-framework';
import moment from 'moment';
import {datepicker} from 'eonasdan/bootstrap-datetimepicker';
import 'eonasdan/bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css!';

@inject(Element)
@customElement('period-picker')
export class PeriodPicker {

    @bindable format = "DD/MM/YYYY";
    @bindable from;
    @bindable to;

    constructor(element) {
        this.element = element;
     }

    attached() {
      this.fromPicker = $(this.element).find('.input-group.from')
          .datetimepicker({
              format: this.format,
              defaultDate: this.from,
              showClose: true,
              showTodayButton: true
          });

      this.toPicker = $(this.element).find('.input-group.to')
          .datetimepicker({
              format: this.format,
              defaultDate: this.to,
              showClose: true,
              showTodayButton: true
          });

      this.fromPicker.on("dp.change", (e) => {
        this.toPicker.data("DateTimePicker").minDate(e.date);
        this.from = e.date.toDate();
        $(this.element).trigger('change');
      });

      this.toPicker.on("dp.change", (e) => {
        this.fromPicker.data("DateTimePicker").maxDate(e.date);
        this.to = e.date.toDate();
        $(this.element).trigger('change');
      });

    }
}
