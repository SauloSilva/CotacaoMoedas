import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'

import { View, TextInput, Text } from 'react-native';
import Button from 'apsl-react-native-button';

import { isEmpty } from 'lodash';
import styles from './styles/Login.style';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Sae } from 'react-native-textinput-effects';

class Login extends Component {
  validOrg() {
    let { user, userErrors } = this.props;
    let { org } = user;
    let { org: orgError } = userErrors;

    if (isEmpty(org)) {
      this.props.setUserOrgError('Não pode ficar em branco')
    } else if(!isEmpty(orgError)) {
      this.props.setUserOrgError(null)
    }

    return !isEmpty(org);
  }

  validName() {
    let { user, userErrors } = this.props;
    let { name } = user;
    let { name: nameError } = userErrors;

    if (isEmpty(name)) {
      this.props.setUserNameError('Não pode ficar em branco')
    } else if(!isEmpty(nameError)) {
      this.props.setUserNameError(null)
    }

    return !isEmpty(name);
  }

  validPassword() {
    let { user, userErrors } = this.props;
    let { password } = user;
    let { password: passwordError } = userErrors;

    if (isEmpty(password)) {
      this.props.setUserPasswordError('Não pode ficar em branco')
    } else if(!isEmpty(passwordError)) {
      this.props.setUserPasswordError(null)
    }

    return !isEmpty(password);
  }

  valid() {
    this.validOrg() || this.validName() || this.validPassword();
    return this.validOrg() && this.validName() && this.validPassword();
  }

  send() {
    if (this.valid())
      this.props.navigation.navigate('HomeStack');
  }

  render() {
    const { setUserOrg, setUserName, setUserPassword, user, userErrors } = this.props;
    let { org, name, password } = user;
    let { org: orgError, name: nameError, password: passwordError } = userErrors;

    return <View style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.wrapper}>
        <Sae
          label={'Organização'}
          labelStyle={styles.inputLabel}
          inputStyle={styles.inputColor}
          iconClass={FontAwesomeIcon}
          iconName={'university'}
          iconColor={styles.iconColor}
          onChangeText={setUserOrg}
          onKeyPress={() => { this.validOrg() }}
          style={styles.input}
          value={org}
        />
        {!isEmpty(orgError) && <Text style={{color: '#e57373', marginTop: 5}}>{orgError}</Text>}

        <Sae
          label={'Nome'}
          labelStyle={styles.inputLabel}
          inputStyle={styles.inputColor}
          iconClass={FontAwesomeIcon}
          iconName={'user'}
          iconColor={styles.iconColor}
          onChangeText={setUserName}
          onKeyPress={() => { this.validName() }}
          style={styles.input}
          value={name}
        />
        {!isEmpty(nameError) && <Text style={{color: '#e57373', marginTop: 5}}>{nameError}</Text>}

        <Sae
          label={'Senha'}
          labelStyle={styles.inputLabel}
          inputStyle={styles.inputColor}
          iconClass={FontAwesomeIcon}
          iconName={'unlock-alt'}
          iconColor={styles.iconColor}
          secureTextEntry={true}
          onChangeText={setUserPassword}
          onKeyPress={() => { this.validPassword() }}
          style={styles.input}
          value={password}
        />
        {!isEmpty(passwordError) && <Text style={{color: '#e57373', marginTop: 5}}>{passwordError}</Text>}

        <Button title='Entrar' style={styles.button} textStyle={styles.buttonText} onPress={() => { this.send() }}>
          Entrar
        </Button>
      </View>
    </View>
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    user: state.user,
    userErrors: state.userErrors
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
