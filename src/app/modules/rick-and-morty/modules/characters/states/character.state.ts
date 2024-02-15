import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs';
import { CHARACTER_DEFAULT as defaults } from '../defaults/character.default';
import { Character } from '../models/character';
import { CharacterService } from '../services/character.service';
import {
  FilterCharacters,
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
  static getFilteredCharecters({ filteredCharacters }: Character.State) {
    return filteredCharacters;
  }

  @Selector()
  static getSelectedCharacter({ selectedCharacter }: Character.State) {
    return selectedCharacter;
  }

  @Selector()
  static getPageInfos({ page }: Character.State) {
    return page;
  }

  @Selector()
  static getGenders({ charecters }: Character.State) {
    return [...new Set(charecters.map((c) => c.gender))];
  }

  @Selector()
  static getStatus({ charecters }: Character.State) {
    return [...new Set(charecters.map((c) => c.status))];
  }

  @Action(GetCharacters)
  getCharecters({ patchState, getState }: StateContext<Character.State>) {
    const page = getState().page.currentPage;
    return this.characterService.get(page).pipe(
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
    { dispatch, getState }: StateContext<Character.State>,
    { page }: GetCharactersWithPage
  ) {
    const state = getState();

    return dispatch(new FilterCharacters(state.filterModel, page));
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

  @Action(FilterCharacters)
  filterCharacters(
    ctx: StateContext<Character.State>,
    { model, page }: FilterCharacters
  ) {
    ctx.patchState({
      filterModel: model,
    });
    console.error(model);

    return this.characterService.getByFilter(model, page).pipe(
      tap((res) => {
        ctx.patchState({
          filteredCharacters: res.results,
          page: {
            currentPage:
              // string içerisindeki sayıyı bulma
              res.info.next === null
                ? res.info.pages
                : +res.info.next
                    .split('')
                    .filter((char) => !isNaN(parseInt(char)))
                    .join('') - 1,
            totalPage: res.info.pages,
          },
        });
      })
    );
  }
}
