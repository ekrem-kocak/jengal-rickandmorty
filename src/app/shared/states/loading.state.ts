import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { SetLoading } from '../actions/loading.action';

interface Loading {
  status: boolean;
}

@State<Loading>({
  name: 'Loading',
  defaults: {
    status: true,
  },
})
@Injectable()
export class LoadingState {
  @Selector()
  static getLoadingStatus({ status }: Loading) {
    return status;
  }

  @Action(SetLoading)
  setLoading({ patchState }: StateContext<Loading>, { status }: SetLoading) {
    patchState({
      status,
    });
  }
}
