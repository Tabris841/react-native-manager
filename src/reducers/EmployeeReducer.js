// @flow

import { EMPLOYEES_FETCH_SUCCESS } from '../constants';
import type { EmployeeAction } from '../types/employee';

const INITIAL_STATE = {};

export default (state: Object = INITIAL_STATE, action: EmployeeAction) => {
  switch (action.type) {
    case EMPLOYEES_FETCH_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
