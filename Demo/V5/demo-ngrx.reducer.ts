import * as demoNgrx from './demo-ngrx.actions';
import { DemoNgrxState, initialDemoNgrxState } from './demo-ngrx.state';

/**
 * Writing Good reducer's
 * 1. Keep then PURE 
 * 2. Should handle data in an immutable manner
 * 3. Always return a value (State)
 */

export function demoNgrxReducer(state = initialDemoNgrxState, action: demoNgrx.Actions): DemoNgrxState {
  switch (action.type) {
    case demoNgrx.GET: {
      return {
        ...state,
        loading: true
      };
    }

    case demoNgrx.GET_SUCCESS: {

      return {
        ...state,
        loading: false,
      };
    }

     case demoNgrx.GET_ERROR: {

      return {
        ...state,
        loading: false,
      };
    }

    default: {
      return state;
    }
  }
}
