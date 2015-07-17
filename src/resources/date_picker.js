import {inject, customElement, bindable} from 'aurelia-framework';
import moment from 'moment';
import {datepicker} from 'eonasdan/bootstrap-datetimepicker';
import 'eonasdan/bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css!';

@inject(Element)
@bindable("value")
@customElement('date-picker')
export class DatePicker {

    @bindable format = "DD/MM/YYYY";

    constructor(element) {
        this.element = element;
     }

    attached() {
      this.datePicker = $(this.element).find('.input-group.date')
          .datetimepicker({
              format: this.format,
              defaultDate: this.value,
              showClose: true,
              showTodayButton: true
          });

      this.datePicker.on("dp.change", (e) => {
        this.value = e.date.toDate();
        $(this.element).trigger('change');
      });
    }
}
