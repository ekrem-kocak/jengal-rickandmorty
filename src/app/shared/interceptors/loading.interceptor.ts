import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, delay, finalize } from 'rxjs';
import { Store } from '@ngxs/store';
import { SetLoading } from '../actions/loading.action';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private store: Store) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.store.dispatch(new SetLoading(true));
    return next.handle(request).pipe(
      // delay(1000),
      finalize(() => this.store.dispatch(new SetLoading(false)))
    );
  }
}
