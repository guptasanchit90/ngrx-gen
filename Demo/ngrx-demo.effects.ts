import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { NgrxDemoService } from './ngrx-demo.service';
import * as ngrxDemo from './ngrx-demo.actions';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class NgrxDemoEffects {

  @Effect() get$ = this.actions$
      .ofType(ngrxDemo.GET)
      .switchMap(payload => this.ngrxDemoService.get()
        // If successful, dispatch success action with result
        .map(res => ({ type: ngrxDemo.GET_SUCCESS, payload: res.json() }))
        // If request fails, dispatch failed action
        .catch(() => Observable.of({ type: ngrxDemo.GET_ERROR}))
      );

  constructor(
    private ngrxDemoService: NgrxDemoService,
    private actions$: Actions
  ) { }

}
