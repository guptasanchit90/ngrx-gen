import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { DemoNgrxService } from './demo-ngrx.service';
import * as demoNgrx from './demo-ngrx.actions';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

@Injectable()
export class DemoNgrxEffects {

  @Effect() get$ = this.actions$
      .ofType(demoNgrx.GET)
      .switchMap((payload) => this.demoNgrxService.get()
        .map((res) => ({ type: demoNgrx.GET_SUCCESS, payload: res.json() }))
        .catch(() => Observable.of({ type: demoNgrx.GET_ERROR}))
      );

  constructor(
    private demoNgrxService: DemoNgrxService,
    private actions$: Actions
  ) { }

}
