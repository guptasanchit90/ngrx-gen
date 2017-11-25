import * as ngrxDemo from './ngrxdemo.actions';

export interface State {
  loading: boolean;
  entities: { [id: string]: any };
  result: string[];
}

export const initialState: State = {
  loading: false,
  entities: {},
  result: []
}

export function reducer(state = initialState, action: ngrxDemo.Actions): State {
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
