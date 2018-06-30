import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { {{properCase name }}Service } from './{{ dashCase name }}.service';
import * as {{ camelCase name }} from './{{ dashCase name }}.actions';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

@Injectable()
export class {{ properCase name }}Effects {

  @Effect() get$ = this.actions$
      .ofType({{ camelCase name }}.GET)
      .switchMap((payload) => this.{{ camelCase name }}Service.get()
        .map((res) => ({ type: {{ camelCase name }}.GET_SUCCESS, payload: res.json() }))
        .catch(() => Observable.of({ type: {{ camelCase name }}.GET_ERROR}))
      );

  constructor(
    private {{ camelCase name }}Service: {{ properCase name }}Service,
    private actions$: Actions
  ) { }

}
