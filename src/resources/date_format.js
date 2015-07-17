import moment from 'moment';

export class DateFormatValueConverter {
   toView(value, format) {
     return moment(value).format(format);
   }

   // fromView(str, format){
   //   console.log(`fromView(${str})`)
   //   if(str.length != format.length)return;
   //   return moment(str, format).toDate();
   // }
 }
