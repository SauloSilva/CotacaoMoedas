import React, { Component } from 'react';
import { Provider } from 'react-redux';

import configureStore from './configureStore';
import AppContainer from './containers/AppContainer'

const Setup = () => (
  <Provider store={configureStore}>
    <AppContainer />
  </Provider>
)

export default Setup;
