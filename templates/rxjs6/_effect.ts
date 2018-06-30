import { switchMap, catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { {{properCase name }}Service } from './{{ dashCase name }}.service';
import * as {{ camelCase name }} from './{{ dashCase name }}.actions';
import { of } from 'rxjs';

@Injectable()
export class {{ properCase name }}Effects {

  @Effect() get$ = this.actions$
    .pipe(
      ofType({{ camelCase name }}.GET),
      switchMap((payload) => this.{{ camelCase name }}Service.get()
        .pipe(
          map((res) => ({ type: {{ camelCase name }}.GET_SUCCESS, payload: res.json() })),
          catchError(() => of({ type: {{ camelCase name }}.GET_ERROR }))))
    );

  constructor(
    private {{ camelCase name }}Service: {{ properCase name }}Service,
    private actions$: Actions
  ) { }

}
