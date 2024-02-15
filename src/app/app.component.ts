import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { LoadingState } from './shared/states/loading.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <div *ngIf="loading$ | async" class="spinner-container">
      <div class=" spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>

    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @Select(LoadingState.getLoadingStatus) loading$:
    | Observable<boolean>
    | undefined;
}
