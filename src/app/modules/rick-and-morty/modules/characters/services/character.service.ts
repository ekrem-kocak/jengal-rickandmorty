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
      this.baseUrl + (page ? `character?page=${page}` : 'character')
    );
  }

  getById(id: string): Observable<Character.Model> {
    return this.http.get<Character.Model>(this.baseUrl + `character/${id}`);
  }
}
