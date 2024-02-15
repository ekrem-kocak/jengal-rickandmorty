import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Character } from '../../models/character';
import { CharacterState } from '../../states/character.state';
import { GetCharactersWithPage } from '../../actions/character.action';

@Component({
  selector: 'app-character-cards',
  template: `
    <div
      *ngIf="{
        charecters: characters$ | async,
        filteredCharacters: filteredCharacters$ | async
      } as data"
      class="container-fluid"
    >
      <div class="row py-4">
        <div class="mb-3">
          <app-filter-and-search></app-filter-and-search>
        </div>

        <ng-container
          *ngIf="data.filteredCharacters === null; else filteredItems"
        >
          <div
            *ngFor="let c of data.charecters"
            class="col-xxl-2 col-xl-3 col-lg-4 col-sm-6 mb-3"
          >
            <app-character-card [character]="c"></app-character-card>
          </div>
        </ng-container>

        <app-pagination></app-pagination>
      </div>

      <ng-template #filteredItems>
        <div
          *ngFor="let c of data.filteredCharacters"
          class="col-xxl-2 col-xl-3 col-lg-4 col-sm-6 mb-3"
        >
          <app-character-card [character]="c"></app-character-card>
        </div>
      </ng-template>
    </div>
  `,
  styleUrls: ['./character-cards.component.scss'],
})
export class CharacterCardsComponent {
  @Select(CharacterState.getCharecters) characters$:
    | Observable<Character.Model[]>
    | undefined;

  @Select(CharacterState.getFilteredCharecters) filteredCharacters$:
    | Observable<Character.Model[]>
    | undefined;
}
