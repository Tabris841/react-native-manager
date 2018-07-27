/**
 * @flow
 */

import * as React from 'react';
import { View, StyleSheet } from 'react-native';

type Props = {
  children?: React.Node
};

const CardSection = (props: Props) => {
  return <View style={style.containerStyle}>{props.children}</View>;
};

const style = StyleSheet.create({
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
});

export { CardSection };
