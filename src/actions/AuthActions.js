// @flow

import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from '../constants';
import type { EmailChangedAction, PasswordChangedAction } from '../types/auth';
import type { ThunkAction, Dispatch } from '../types';

export const emailChanged = (text: string): EmailChangedAction => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text: string): PasswordChangedAction => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({
  email,
  password
}: {
  email: string,
  password: string
}): ThunkAction => {
  return (dispatch: Dispatch): void => {
    dispatch({ type: LOGIN_USER });

    firebase
      .auth()
      .signInWithEmailAndPassword((email: string), (password: string))
      .then(user => loginUserSuccess((dispatch: Dispatch), (user: Object)))
      .catch(error => {
        console.log(error);

        firebase
          .auth()
          .createUserWithEmailAndPassword((email: string), (password: string))
          .then(user => loginUserSuccess((dispatch: Dispatch), (user: Object)))
          .catch(() => loginUserFail((dispatch: Dispatch)));
      });
  };
};

const loginUserFail = (dispatch: Dispatch): void => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch: Dispatch, user: Object): void => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });

  Actions.main();
};
