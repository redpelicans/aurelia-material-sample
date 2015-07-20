export class FloatValueConverter {
   toView(value, format) {
     return Number(value).toFixed(2);
   }
 }
