import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Charecter } from '../models/charecter';
import { GetCharecters } from '../actions/charecter.action';
import { CharecterService } from '../services/charecter.service';
import { tap } from 'rxjs';

@State<Charecter.State[]>({
  name: 'Charecter',
})
@Injectable()
export class CharecterState {
  constructor(private charecterService: CharecterService) {}

  @Selector()
  static getCharecters({ charecters }: Charecter.State) {
    return charecters;
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
}
