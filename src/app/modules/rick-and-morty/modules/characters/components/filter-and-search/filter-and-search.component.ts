import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { CharacterState } from '../../states/character.state';
import { Observable, filter } from 'rxjs';
import { FilterCharacters } from '../../actions/character.action';

@Component({
  selector: 'app-filter-and-search',
  templateUrl: './filter-and-search.component.html',
  styleUrls: ['./filter-and-search.component.scss'],
})
export class FilterAndSearchComponent {
  @Select(CharacterState.getGenders) genders$: Observable<string[]> | undefined;
  @Select(CharacterState.getStatus) status$: Observable<string[]> | undefined;

  filterForm: FormGroup;

  constructor(private store: Store) {
    const filters = this.store.selectSnapshot(CharacterState.getFilter);

    this.filterForm = new FormGroup({
      searchText: new FormControl(filters.searchText),
      type: new FormControl(filters.type),
      status: new FormControl(filters.status),
      gender: new FormControl(filters.gender),
    });
  }

  submit() {
    this.store.dispatch(new FilterCharacters(this.filterForm.value));
  }

  resetFilter() {
    const d = { gender: '', searchText: '', status: '', type: '' };
    this.filterForm.patchValue(d);
    this.store.dispatch(new FilterCharacters(d));
  }
}
