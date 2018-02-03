import { Action } from '@ngrx/store';

// Actions
export const GET = '[{{ titleCase name }}] Get';
export const GET_SUCCESS = '[{{ titleCase name }}] Get Success';
export const GET_ERROR = '[{{ titleCase name }}] Get Error';

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
