import React from 'react';
import {
  Scene,
  Router,
  Actions,
  Stack,
  Reducer
} from 'react-native-router-flux';

import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const reducerCreate = params => {
  const defaultReducer = new Reducer(params);
  return (state, action) => {
    console.log('ACTION:', action);
    return defaultReducer(state, action);
  };
};

const getSceneStyle = () => ({
  shadowOpacity: 1,
  shadowRadius: 3
});

const RouterComponent = () => {
  return (
    <Router createReducer={reducerCreate} getSceneStyle={getSceneStyle}>
      <Stack hideNavBar key="root">
        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Please Login" />
        </Scene>
        <Scene key="main">
          <Scene
            onRight={() => Actions.employeeCreate()}
            rightTitle="Add"
            key="employeeList"
            component={EmployeeList}
            title="Employees"
            initial
          />
          <Scene
            key="employeeCreate"
            component={EmployeeCreate}
            title="Create Employee"
          />
          <Scene
            key="employeeEdit"
            component={EmployeeEdit}
            title="Edit Employee"
          />
        </Scene>
      </Stack>
    </Router>
  );
};

export default RouterComponent;
