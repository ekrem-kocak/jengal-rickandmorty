import { Component } from '@angular/core';

@Component({
  selector: 'app-charecter-cards',
  template: `
    <div class="row">
      <div class="col-xxl-3">
        <app-charecter-card></app-charecter-card>
      </div>
    </div>
  `,
  styleUrls: ['./charecter-cards.component.scss'],
})
export class CharecterCardsComponent {}
