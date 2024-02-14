import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Store } from '@ngxs/store';
import { GetCharecterById } from '../actions/charecter.action';

export const charecterDetailsResolver: ResolveFn<boolean> = (route, state) => {
  return inject(Store).dispatch(
    new GetCharecterById(route.paramMap.get('id')!)
  );
};
