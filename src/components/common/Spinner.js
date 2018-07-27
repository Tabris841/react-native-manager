/**
 * @flow
 */

import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

type Props = {
  size: number | 'small' | 'large'
};

const Spinner = (props: Props) => {
  const { size } = props;
  const { spinnerStyle } = styles;

  return (
    <View style={spinnerStyle}>
      <ActivityIndicator size={size} />
    </View>
  );
};

Spinner.defaultProps = {
  size: 'large'
};

const styles = StyleSheet.create({
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export { Spinner };
