import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Charecter } from '../models/charecter';

@Injectable({
  providedIn: 'root',
})
export class CharecterService {
  constructor(
    private http: HttpClient,
    @Inject('BASE_API_URL') private baseUrl: string
  ) {}

  get(): Observable<Charecter.Response> {
    return this.http.get<Charecter.Response>(this.baseUrl + 'character');
  }

  getById(id: string): Observable<Charecter.Model> {
    return this.http.get<Charecter.Model>(this.baseUrl + `character/${id}`);
  }
}
