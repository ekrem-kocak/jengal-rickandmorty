import { Component } from '@angular/core';

@Component({
  selector: 'app-rick-and-morty',
  template: `
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-2 m-0 p-0">
          <app-sidebar></app-sidebar>
        </div>
        <div class="col-xl-10">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `,
})
export class RickAndMortyComponent {}
