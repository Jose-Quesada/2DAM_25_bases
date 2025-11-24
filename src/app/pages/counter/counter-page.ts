import { Component} from '@angular/core';

@Component({
  selector: 'counter-page',

  template: `
  <h1>Contador: {{ counter }}</h1>
  <h2>CounterPage</h2>
  <button (click)="increaseBy(1)"> +1 </button>`

})

export class CounterPage  {
  counter = 20;

  increaseBy( value:number){
    this.counter += value;
  }
}
