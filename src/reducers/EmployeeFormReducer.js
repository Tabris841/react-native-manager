// @flow

import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEE_SAVE_SUCCESS
} from '../constants';
import type { Employee, EmployeeAction } from '../types/employee';

const INITIAL_STATE: Employee = {
  name: '',
  phone: '',
  shift: ''
};

export default (state: Employee = INITIAL_STATE, action: EmployeeAction) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case EMPLOYEE_CREATE:
      return INITIAL_STATE;
    case EMPLOYEE_SAVE_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
