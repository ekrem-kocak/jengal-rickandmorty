import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Store } from '@ngxs/store';
import { GetCharacterById } from '../actions/character.action';

export const characterDetailsResolver: ResolveFn<boolean> = (route, state) => {
  return inject(Store).dispatch(
    new GetCharacterById(route.paramMap.get('id')!)
  );
};
