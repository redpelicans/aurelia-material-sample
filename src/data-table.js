import {bindable, customElement} from 'aurelia-framework';
import $ from 'jquery';

@customElement('data-table')
export class DataTableCustomElement {
  @bindable series;

  attached(){
    console.log("Attached")
    console.log(this.series)
  }

}

