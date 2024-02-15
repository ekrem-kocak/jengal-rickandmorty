import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { CharacterState } from '../../states/character.state';
import { Observable } from 'rxjs';
import { FilterCharacters } from '../../actions/character.action';

@Component({
  selector: 'app-filter-and-search',
  templateUrl: './filter-and-search.component.html',
  styleUrls: ['./filter-and-search.component.scss'],
})
export class FilterAndSearchComponent {
  @Select(CharacterState.getGenders) genders$: Observable<string[]> | undefined;
  @Select(CharacterState.getStatus) status$: Observable<string[]> | undefined;

  constructor(private store: Store) {}

  filterForm: FormGroup = new FormGroup({
    searchText: new FormControl(''),
    type: new FormControl(''),
    status: new FormControl(''),
    gender: new FormControl(''),
  });

  submit() {
    this.store.dispatch(new FilterCharacters(this.filterForm.value));
  }

  resetFilter() {
    const d = { gender: '', searchText: '', status: '', type: '' };
    this.filterForm.patchValue(d);
    this.store.dispatch(new FilterCharacters(d));
  }
}
