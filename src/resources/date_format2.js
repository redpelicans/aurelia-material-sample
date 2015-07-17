import moment from 'moment';

export class DateFormat2ValueConverter {
   toView(value, format) {
     console.log(`toView(${value})`)
     if(!format)format = "DD/MM/YYYY";
     return moment(value).format(format);
   }

 }
