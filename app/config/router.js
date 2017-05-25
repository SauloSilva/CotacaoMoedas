import React from 'react';

import { Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Home from '../containers/Home';
import Login from '../containers/Login';
import Detail from '../containers/Detail';
import {merge} from 'lodash';

const HomeStack = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Listagem das moedas',
    },
  },
  Detail: {
    screen: Detail,
    navigationOptions: ({ navigation }) => ({title: `Descrição: ${navigation.state.params.PAPEL}`}),
  },
  Index: {
    screen: Home,
  },
});

export const RootStack = StackNavigator({
  Login: {
    screen: Login,
  },
  HomeStack: {
    screen: HomeStack,
  },
  Index: {
    screen: Login
  }
}, {
  initialRouteName: 'Login',
  headerMode: 'none',
  mode: Platform.OS === 'ios' ? 'modal' : 'card',
});
