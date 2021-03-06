// @flow

import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import type { State, Dispatch } from '../types';
import { employeeUpdate } from '../actions';
import { CardSection, Input } from './common';

type Props = {
  name: string,
  phone: string,
  shift: string,
  employeeUpdate: ({ prop: string, value: string }) => void
};

class EmployeeForm extends Component<Props> {
  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jane"
            value={this.props.name}
            onChangeText={value =>
              this.props.employeeUpdate({ prop: 'name', value })
            }
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="555-555-5555"
            value={this.props.phone}
            onChangeText={value =>
              this.props.employeeUpdate({ prop: 'phone', value })
            }
          />
        </CardSection>

        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerTextStyle}>Shift</Text>
          <Picker
            style={{ flex: 1 }}
            selectedValue={this.props.shift}
            onValueChange={value =>
              this.props.employeeUpdate({ prop: 'shift', value })
            }
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
});

const mapStateToProps = (state: State) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(
  mapStateToProps,
  { employeeUpdate }
)(EmployeeForm);
