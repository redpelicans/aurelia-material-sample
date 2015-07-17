import moment from 'moment';

export class DateTimeFormatValueConverter {
   toView(value, format) {
     return moment(value).format(format);
   }

 }
