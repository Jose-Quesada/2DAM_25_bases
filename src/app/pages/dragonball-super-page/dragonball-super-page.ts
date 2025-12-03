import { Component, inject, signal } from '@angular/core';
import { CharacterList } from "../../components/dragonball/character-list/character-list";
import { Character } from '../../interfaces/character.interface';
import { CharacterAdd } from "../../components/dragonball/character-add/character-add";
import { DragonballService } from '../../services/dragonball';


@Component({
  selector: 'app-dragonball-super-page',
  imports: [CharacterList, CharacterAdd],
  templateUrl: './dragonball-super-page.html',
  styles: ``,
})
export class DragonballSuperPage {

  name = signal('');
  power = signal(0);

  public dragonballService = inject(DragonballService);


}
