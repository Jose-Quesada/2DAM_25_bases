import { Component, signal } from '@angular/core';

interface Character{
  id: number;
  name: string;
  power: number;

}

@Component({
  selector: 'app-dragonball-pages',
  imports: [],
  templateUrl: './dragonball-pages.html',
  styles: ``,
})
export class DragonballPages {
  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001},
    { id: 2, name: 'Vegeta', power: 8000},
    { id: 3, name: 'Picolo', power: 3000},

  ]);
}
