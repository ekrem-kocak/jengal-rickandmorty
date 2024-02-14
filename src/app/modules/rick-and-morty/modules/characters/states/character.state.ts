import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs';
import { CHARACTER_DEFAULT as defaults } from '../defaults/character.default';
import { Character } from '../models/character';
import { CharacterService } from '../services/character.service';
import { GetCharacterById, GetCharacters } from '../actions/character.action';

@State<Character.State>({
  name: 'Charecter',
  defaults,
})
@Injectable()
export class CharacterState {
  constructor(private characterService: CharacterService) {}

  @Selector()
  static getCharecters({ charecters }: Character.State) {
    return charecters;
  }

  @Selector()
  static getSelectedCharacter({ selectedCharacter }: Character.State) {
    return selectedCharacter;
  }

  @Action(GetCharacters)
  getCharecters({ patchState }: StateContext<Character.State>) {
    return this.characterService.get().pipe(
      tap((res) => {
        patchState({
          charecters: res.results,
        });
      })
    );
  }

  @Action(GetCharacterById)
  GetCharacterById(
    { patchState }: StateContext<Character.State>,
    { id }: GetCharacterById
  ) {
    return this.characterService.getById(id.toString()).pipe(
      tap((res) => {
        patchState({
          selectedCharacter: res,
        });
      })
    );
  }
}
