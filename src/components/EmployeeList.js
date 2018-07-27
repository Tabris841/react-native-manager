// @flow

import { map } from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ListView } from 'react-native';

import type { State, Dispatch } from '../types';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';

type Props = {
  employeesFetch: () => void,
  employees: any
};

type StateProps = {
  employee: any
};

type DispatchProps = {
  employeesFetch: () => void
};

class EmployeeList extends Component<Props> {
  dataSource: any;

  componentWillMount() {
    this.props.employeesFetch();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that this component
    // will be rendered with
    // this.props is still the old set of props

    this.createDataSource(nextProps);
  }

  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(employees);
  }

  renderRow(employee) {
    return <ListItem employee={employee} />;
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = (state: State) => {
  const employees = map(state.employees, (val, uid) => {
    return { ...val, uid };
  });

  return { employees };
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      employeesFetch
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeeList);
