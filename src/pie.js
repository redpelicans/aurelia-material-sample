import {bindable, customElement} from 'aurelia-framework';

@customElement('pie')
@bindable('running')
export class PieCustomElement {

    constructor(element) {
        this.percentage = randInt(1, 100);
        this.setPath(...this.getCoordinates());
        this.action='Stop';
     }

    reset(){
      if(this.timeoutID) window.clearTimeout(this.timeoutID);
      this.updatePercentage(50);
      this.changePercentage(false);
    }

    setPath(x,y){
      this.path = `M 0.5 0.5 0.5 0 A 0.5 0.5 0 ${this.percentage < 50 ? 1 : 0} 1 ${x} ${y} z`;
    }

    runningChanged(){
      if(this.running) this.changePercentage();
      this.action = this.running ? 'Stop' : 'Start';
    }

    getCoordinates(){
      let angle = (90 + this.percentage * 360 / 100) * Math.PI / 180;
      let [x, y] = [Math.cos(angle), Math.sin(angle)];
      return [x/2+0.5, -y/2+0.5];
    }

    updatePercentage(value){
      this.percentage = value || Math.max(1, Math.min(this.percentage + randInt(-10, 10), 100));
      this.setPath(...this.getCoordinates());
    }

    changePercentage(update=true){
      if(this.running){
        if(update) this.updatePercentage();
        this.timeoutID = window.setTimeout(this.changePercentage.bind(this), 500);
      }
    }

    attached() {
      this.changePercentage();
    }

}




function randInt(min, max){
  return (Math.floor(Math.random() * (max - min + 1)) + min);
}
