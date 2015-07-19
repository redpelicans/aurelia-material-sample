import {bindable, customElement, inject} from 'aurelia-framework';
import $ from 'jquery';

class Point{
  constructor(label, x, y, updateCallback) {
    this.label = label;
    this.x = x;
    this.y = y;
    this.updateCallback = updateCallback;
  }

  valueHasChanged(){
    this.updateCallback();
  }
}

@customElement('chart')
@bindable('arity')
export class ChartCustomElement {

    constructor() {
      // TODO
      console.log(this.arity)
      this.arity = this.arity ? Number(this.arity) : 5;
      let c =  1;
      this.series = Array.from(new Array(this.arity), () => new Point(`${c++}.`, 0, randInt(0, 500), () => this.updatePoints()));
      this.updateAbscissa();
      this.updatePoints();
     }

    updatePoints(){
      function y(y){ return (500-y)*.4 };
      function path(points){ return points.map( p => `${p.x},${y(p.y)}` ).join(' ') };
      this.points = `469.3,222.7 1,222.7 ${path(this.series)}`;
    }

    updateAbscissa(){
      let [x, c] = [470 / (this.series.length + 1), 1];
      for(let p of this.series){
        p.x = x * c++;
      }
    }

    addPoint(){
      this.series.push( new Point(`${this.series.length+1}.`, 0, randInt(0, 500), () => this.updatePoints()));
      this.updateAbscissa();
      this.updatePoints();
    }

    removePoint(){
      this.series.pop();
      this.updateAbscissa();
      this.updatePoints();
    }

}

function randInt(min, max){
  return (Math.floor(Math.random() * (max - min + 1)) + min);
}
