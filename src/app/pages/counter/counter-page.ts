import { Component, signal} from '@angular/core';

@Component({
  selector: 'counter-page',

  templateUrl:'./counter-page.html',

  styles:`
    button{
      margin: 5px 10px;
      padding: 5px;
      width: 75px;
    }
  `

})

export class CounterPage  {
  counter = 10;
  counterSignal = signal(20);

  increaseBy( value:number){
    this.counter += value;
    // this.counterSignal.set( this.counterSignal() + value);
    this.counterSignal.update( (current) => current + value);
  }

  resetCounter(){
    this.counter = 10;
    this.counterSignal.set(20);
  }
}
