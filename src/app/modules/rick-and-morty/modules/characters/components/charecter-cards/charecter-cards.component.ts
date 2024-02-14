import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { CharecterState } from '../../states/charecter.state';
import { Observable } from 'rxjs';
import { Charecter } from '../../models/charecter';

@Component({
  selector: 'app-charecter-cards',
  template: `
    <div
      *ngIf="{
        charecters: charecters$ | async
      } as data"
      class="container-fluid"
    >
      <div class="row">
        <div *ngFor="let c of data.charecters" class="col-xxl-2 col-xl-3 col-lg-4 col-sm-6 mb-3">
          <app-charecter-card [charecter]="c"></app-charecter-card>
        </div>
      </div>
    </div>

    <!-- ALTERNATIVE -->

    <!-- <div class="row">
      <div *ngFor="let item of charecters$ | async" class="col-3">
        <app-charecter-card></app-charecter-card>
      </div>
    </div> -->
  `,
  styleUrls: ['./charecter-cards.component.scss'],
})
export class CharecterCardsComponent {
  @Select(CharecterState.getCharecters) charecters$:
    | Observable<Charecter.Model[]>
    | undefined;
}
