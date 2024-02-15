import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs';
import { CHARACTER_DEFAULT as defaults } from '../defaults/character.default';
import { Character } from '../models/character';
import { CharacterService } from '../services/character.service';
import {
  GetCharacterById,
  GetCharacters,
  GetCharactersWithPage,
} from '../actions/character.action';

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

  @Selector()
  static getPageInfos({ page }: Character.State) {
    return page;
  }

  @Action(GetCharacters)
  getCharecters({ patchState }: StateContext<Character.State>) {
    return this.characterService.get().pipe(
      tap((res) => {
        console.log(res);
        patchState({
          charecters: res.results,
          page: {
            currentPage: 1,
            totalPage: res.info.pages,
          },
        });
      })
    );
  }

  @Action(GetCharactersWithPage)
  getCharectersWithPage(
    { patchState }: StateContext<Character.State>,
    { page }: GetCharactersWithPage
  ) {
    return this.characterService.get(page).pipe(
      tap((res) => {
        patchState({
          charecters: res.results,
          page: {
            currentPage:
              // string içerisindeki sayıyı bulma
              +res.info.next
                .split('')
                .filter((char) => !isNaN(parseInt(char)))
                .join('') - 1,
            totalPage: res.info.pages,
          },
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
