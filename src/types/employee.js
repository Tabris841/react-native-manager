// @flow

import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEES_FETCH_SUCCESS,
  EMPLOYEE_SAVE_SUCCESS
} from '../constants';

export type Employee = {
  name: string,
  phone: string,
  shift: string
};

export type EmployeeState = {
  employeeForm: Employee,
  employees: {}
};

export type EmployeeUpdateAction = {
  +type: typeof EMPLOYEE_UPDATE,
  payload: Object
};

export type EmployeeCreateAction = {
  +type: typeof EMPLOYEE_CREATE
};

export type EmployeeFetchSuccessAction = {
  +type: typeof EMPLOYEES_FETCH_SUCCESS,
  payload: Object
};

export type EmployeeSaveSuccessAction = {
  +type: typeof EMPLOYEE_SAVE_SUCCESS,
  payload: Object
};

export type EmployeeAction =
  | EmployeeUpdateAction
  | EmployeeCreateAction
  | EmployeeFetchSuccessAction
  | EmployeeSaveSuccessAction;
