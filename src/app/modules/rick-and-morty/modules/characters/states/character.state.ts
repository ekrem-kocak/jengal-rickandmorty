import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs';
import { CHARACTER_DEFAULT as defaults } from '../defaults/character.default';
import { Character } from '../models/character';
import { CharacterService } from '../services/character.service';
import {
  FilterCharacters,
  GetAllGendersAndStatus,
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
  static getGenders({ genders }: Character.State) {
    return genders;
  }

  @Selector()
  static getStatus({ status }: Character.State) {
    return status;
  }

  @Selector()
  static getFilter({ filterModel }: Character.State) {
    return filterModel;
  }

  @Action(GetCharacters)
  getCharecters({ patchState, getState }: StateContext<Character.State>) {
    const state = getState();
    return this.characterService
      .get(state.filterModel, state.page.currentPage)
      .pipe(
        tap((res) => {
          patchState({
            charecters: res.results,
            page: {
              currentPage: state.page.currentPage,
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
    return this.characterService.get(model, page).pipe(
      tap((res) => {
        ctx.patchState({
          filterModel: model,
        });

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

  @Action(GetAllGendersAndStatus)
  getAllGendersAndStatus({ patchState }: StateContext<Character.State>) {
    return this.characterService.getAll().pipe(
      tap((res) => {
        patchState({
          genders: [...new Set(res.results.map((c) => c.gender))],
          status: [...new Set(res.results.map((c) => c.status))],
        });
      })
    );
  }
}
