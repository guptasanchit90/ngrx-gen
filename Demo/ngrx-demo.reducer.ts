import * as ngrxDemo from './ngrx-demo.actions';
import { NgrxDemoState, initialNgrxDemoState } from './ngrx-demo.state';

export function reducer(state = initialNgrxDemoState, action: ngrxDemo.Actions): NgrxDemoState {
  switch (action.type) {
    case ngrxDemo.GET: {
      return {
        ...state,
        loading: true
      }
    }

    case ngrxDemo.GET_SUCCESS: {

      return {
        ...state,
        loading: false,
      };
    }

     case ngrxDemo.GET_ERROR: {

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
