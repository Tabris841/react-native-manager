// @flow
import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux';

import type { AuthState, AuthAction } from './auth';
import type { EmployeeState, EmployeeAction } from './employee';

export type ReduxInitAction = { type: '@@INIT' };

export type State = AuthState & EmployeeState;

export type Action = ReduxInitAction | AuthAction | EmployeeAction;

export type GetState = () => State;

export type PromiseAction = Promise<Action>;

export type ThunkAction = (dispatch: Dispatch, getState: GetState) => void;

export type Store = ReduxStore<State, Action>;

export type Dispatch = ReduxDispatch<Action> & ((action: ThunkAction) => void);
