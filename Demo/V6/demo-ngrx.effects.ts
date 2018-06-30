import { switchMap, catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { DemoNgrxService } from './demo-ngrx.service';
import * as demoNgrx from './demo-ngrx.actions';
import { of } from 'rxjs';

@Injectable()
export class DemoNgrxEffects {

  @Effect() get$ = this.actions$
    .pipe(
      ofType(demoNgrx.GET),
      switchMap((payload) => this.demoNgrxService.get()
        .pipe(
          map((res) => ({ type: demoNgrx.GET_SUCCESS, payload: res.json() })),
          catchError(() => of({ type: demoNgrx.GET_ERROR }))))
    );

  constructor(
    private demoNgrxService: DemoNgrxService,
    private actions$: Actions
  ) { }

}
