// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

import type { State, Dispatch } from '../types';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';

type Props = {
  name: string,
  phone: string,
  shift: string,
  employeeCreate: ({ name: string, phone: string, shift: string }) => void
};

class EmployeeCreate extends Component<Props> {
  onButtonPress() {
    const { name, phone, shift } = this.props;

    this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
  }

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Create</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state: State) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(
  mapStateToProps,
  {
    employeeUpdate,
    employeeCreate
  }
)(EmployeeCreate);
