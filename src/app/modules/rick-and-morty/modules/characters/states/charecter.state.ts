import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Charecter } from '../models/charecter';
import { GetCharecterById, GetCharecters } from '../actions/charecter.action';
import { CharecterService } from '../services/charecter.service';
import { tap } from 'rxjs';
import { CHARECTER_DEFAULT as defaults } from '../defaults/charecter.default';

@State<Charecter.State>({
  name: 'Charecter',
  defaults,
})
@Injectable()
export class CharecterState {
  constructor(private charecterService: CharecterService) {}

  @Selector()
  static getCharecters({ charecters }: Charecter.State) {
    return charecters;
  }

  @Selector()
  static getSelectedCharacter({ selectedCharacter }: Charecter.State) {
    return selectedCharacter;
  }

  @Action(GetCharecters)
  getCharecters({ patchState }: StateContext<Charecter.State>) {
    return this.charecterService.get().pipe(
      tap((res) => {
        patchState({
          charecters: res.results,
        });
      })
    );
  }

  @Action(GetCharecterById)
  getCharecterById(
    { patchState }: StateContext<Charecter.State>,
    { id }: GetCharecterById
  ) {
    return this.charecterService.getById(id.toString()).pipe(
      tap((res) => {
        patchState({
          selectedCharacter: res,
        });
      })
    );
  }
}
