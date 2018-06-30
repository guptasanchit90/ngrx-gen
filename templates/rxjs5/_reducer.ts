import * as {{ camelCase name }} from './{{ dashCase name }}.actions';
import { {{ properCase name }}State, initial{{ properCase name }}State } from './{{ dashCase name }}.state';

/**
 * Writing Good reducer's
 * 1. Keep then PURE 
 * 2. Should handle data in an immutable manner
 * 3. Always return a value (State)
 */

export function {{camelCase name}}Reducer(state = initial{{ properCase name }}State, action: {{ camelCase name }}.Actions): {{ properCase name }}State {
  switch (action.type) {
    case {{ camelCase name }}.GET: {
      return {
        ...state,
        loading: true
      };
    }

    case {{ camelCase name }}.GET_SUCCESS: {

      return {
        ...state,
        loading: false,
      };
    }

     case {{ camelCase name }}.GET_ERROR: {

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
