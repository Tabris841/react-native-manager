// @flow

import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { CardSection } from './common';

type Props = {
  employee: Object
};

class ListItem extends Component<Props> {
  onRowPress() {
    Actions.employeeEdit({ employee: this.props.employee });
  }

  render() {
    const { name } = this.props.employee;

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>{name}</Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
});

export default ListItem;
