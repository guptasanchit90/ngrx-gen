import { Action } from '@ngrx/store';

/**
 * Good Action hygiene
 * 1. Actions names should be readable and easy to debug
 * 2. Actions should be unique for an intent
 * 3. Payload should be an Object instead of using the variable directly
 */

export const GET = '[Demo Ngrx] Get';
export const GET_SUCCESS = '[Demo Ngrx] Get Success';
export const GET_ERROR = '[Demo Ngrx] Get Error';

// Create actions with or without payload
export class GetAction implements Action {
  readonly type = GET;
}

export class GetSuccessAction implements Action {
  readonly type = GET_SUCCESS;

  constructor(public payload: any) { }
}

export class GetErrorAction implements Action {
  readonly type = GET_ERROR;

  constructor(public payload: any) { }
}

// Export created actions
export type Actions =
  | GetAction
  | GetSuccessAction
  | GetErrorAction;
