// @flow

import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import type { Connector } from 'react-redux';

import type { State, Dispatch } from '../types';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';
import type {
  EmailChangedAction,
  PasswordChangedAction,
  LoginUser
} from '../actions';

type Props = {
  email: string,
  password: string,
  loading: boolean,
  error: string,
  emailChanged: (text: string) => EmailChangedAction,
  passwordChanged: (text: string) => PasswordChangedAction,
  loginUser: ({ email: string, password: string }) => LoginUser
};

class LoginForm extends Component<Props> {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return <Button onPress={this.onButtonPress.bind(this)}>Login</Button>;
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>{this.props.error}</Text>

        <CardSection>{this.renderButton()}</CardSection>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
});

const mapStateToProps = ({ auth }: State) => {
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
};

const connector = connect(
  mapStateToProps,
  {
    emailChanged,
    passwordChanged,
    loginUser
  }
);

export default connector(LoginForm);
