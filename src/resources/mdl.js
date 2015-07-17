import {inject, customAttribute} from 'aurelia-framework';
import {componentHandler} from 'material-design-lite';
import 'material-design-lite/material.css!';

console.log('mdl====>')
console.log(componentHandler)
@inject(Element)
@customAttribute('mdl')
export class MDL {

    constructor(element) {
        this.element = element;
     }

    attached() {
      console.log("mdl attached: " + this.value);
      console.log(this.element)
      switch(this.value){
        case 'button':
          componentHandler.upgradeElement(this.element, 'MaterialButton');
          componentHandler.upgradeElement(this.element, 'MaterialRipple');
          break;
        case 'textfield':
          componentHandler.upgradeElement(this.element, 'MaterialTextfield');
          break;
      }
    }
}
