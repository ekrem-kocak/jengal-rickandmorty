import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GetCharactersWithPage } from '../../actions/character.action';
import { Character } from '../../models/character';
import { CharacterState } from '../../states/character.state';

@Component({
  selector: 'app-pagination',
  template: `
    <nav
      *ngIf="{
        totalPage: (page$ | async)?.totalPage,
        currentPage: (page$ | async)?.currentPage
      } as data"
      aria-label="Page navigation example"
    >
      <ul class="pagination">
        <li class="page-item" [class.disabled]="data.currentPage! === 1">
          <a class="page-link" (click)="changePage(data.currentPage! - 1)"
            >Previous</a
          >
        </li>
        <li
          class="page-item"
          *ngIf="data.currentPage !== 1"
          (click)="changePage(data.currentPage! - 1)"
        >
          <a class="page-link" [innerText]="data.currentPage! - 1"></a>
        </li>
        <li class="page-item active">
          <a class="page-link" [innerText]="data.currentPage"></a>
        </li>
        <li class="page-item" (click)="changePage(data.currentPage! + 1)">
          <a class="page-link" [innerText]="data.currentPage! + 1"></a>
        </li>
        <li
          class="page-item"
          *ngIf="data.currentPage === 1"
          (click)="changePage(data.currentPage! + 2)"
        >
          <a class="page-link" [innerText]="data.currentPage! + 2"></a>
        </li>
        <li
          class="page-item"
          [class.disabled]="data.currentPage! === data.totalPage"
        >
          <a class="page-link" (click)="changePage(data.currentPage! + 1)"
            >Next</a
          >
        </li>
      </ul>
    </nav>
  `,
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class PaginationComponent {
  @Select(CharacterState.getPageInfos) page$:
    | Observable<Character.Page>
    | undefined;

  constructor(private store: Store) {}

  changePage(page: number) {
    this.store.dispatch(new GetCharactersWithPage(page));
    window.scrollTo(0, 0);
  }
}
