import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Character } from '../../models/character';
import { CharacterState } from '../../states/character.state';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-charecter-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss'],
})
export class CharacterDetailsComponent {
  @Select(CharacterState.getSelectedCharacter) selectedCharacter$:
    | Observable<Character.Model>
    | undefined;

  constructor(private router: Router) {}
}
