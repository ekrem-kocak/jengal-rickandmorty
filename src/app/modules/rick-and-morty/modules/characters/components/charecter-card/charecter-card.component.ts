import { Component, Input } from '@angular/core';
import { Charecter } from '../../models/charecter';

@Component({
  selector: 'app-charecter-card',
  template: `
    <div *ngIf="charecter as c" class="card h-100">
      <img [src]="c.image" class="card-img-top" alt="..." />
      <div class="card-body d-flex flex-column">
        <h3 class="card-title flex-grow-1" [innerText]="c.name"></h3>
        <ul class="my-3">
          <li>Status: <span [innerText]="c.status"></span></li>
          <li>Species: <span [innerText]="c.species"></span></li>
          <li>Gender: <span [innerText]="c.gender"></span></li>
        </ul>
        <button href="#" class="btn btn-primary w-100 d-flex justify-content-center align-items-center">
          <span class="fw-bold">Details</span>
          <i class="pi pi-arrow-right ms-3"></i>
        </button>
      </div>
    </div>
  `,
  styleUrls: ['./charecter-card.component.scss'],
})
export class CharecterCardComponent {
  @Input() charecter: Charecter.Model | undefined;
}
