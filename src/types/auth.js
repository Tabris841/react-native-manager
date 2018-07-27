// @flow

import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL
} from '../constants';

export type Auth = {
  +email: string,
  +password: string,
  +user: Object | null,
  +error: string,
  +loading: boolean
};

export type AuthState = {
  +auth: Auth
};

export type EmailChangedAction = {
  +type: typeof EMAIL_CHANGED,
  payload: string
};

export type PasswordChangedAction = {
  +type: typeof PASSWORD_CHANGED,
  payload: string
};

export type LoginUserAction = {
  +type: typeof LOGIN_USER
};

export type LoginUserSuccessAction = {
  +type: typeof LOGIN_USER_SUCCESS,
  payload: Object
};

export type LoginUserFailAction = {
  +type: typeof LOGIN_USER_FAIL
};

export type AuthAction =
  | EmailChangedAction
  | PasswordChangedAction
  | LoginUserAction
  | LoginUserSuccessAction
  | LoginUserFailAction;
