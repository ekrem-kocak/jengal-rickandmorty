import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Store } from '@ngxs/store';
import { GetCharacters } from '../actions/character.action';

export const charactersResolver: ResolveFn<boolean> = (route, state) => {
  return inject(Store).dispatch(new GetCharacters());
};
