import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../models/character';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor(
    private http: HttpClient,
    @Inject('BASE_API_URL') private baseUrl: string
  ) {}

  get(page?: number): Observable<Character.Response> {
    return this.http.get<Character.Response>(
      this.baseUrl + `character/?page=${page}`
    );
  }

  getById(id: string): Observable<Character.Model> {
    return this.http.get<Character.Model>(this.baseUrl + `character/${id}`);
  }

  getByFilter(
    filter: Character.FilterModel,
    page: number
  ): Observable<Character.Response> {
    console.log(page);
    console.log(filter);
    return this.http.get<Character.Response>(
      this.baseUrl +
        `character/?page=${page}` +
        (filter.searchText.length
          ? `&name=${filter.searchText.toLowerCase()}`
          : '') +
        (filter.status.length ? `&status=${filter.status.toLowerCase()}` : '') +
        (filter.gender.length ? `&gender=${filter.gender.toLowerCase()}` : '') +
        (filter.type.length ? `&type=${filter.type.toLowerCase()}` : '')
    );
  }
}
