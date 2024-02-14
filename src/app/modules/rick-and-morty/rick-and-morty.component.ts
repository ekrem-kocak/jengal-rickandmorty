import { Component } from '@angular/core';

@Component({
  selector: 'app-rick-and-morty',
  template: `
    <div class="row">
      <div class="col-2">
        <app-sidebar></app-sidebar>
      </div>
      <div class="col-10">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
})
export class RickAndMortyComponent {}
