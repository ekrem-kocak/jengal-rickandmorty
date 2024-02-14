import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Store } from '@ngxs/store';
import { GetCharecters } from '../actions/charecter.action';

export const charectersResolver: ResolveFn<boolean> = (route, state) => {
  return inject(Store).dispatch(new GetCharecters());
};
