import createReducer from '../lib/createReducer';
import * as types from '../actions/types';
import {merge} from 'lodash';

let initialState = {org: null, name: null, password: null};

export const user = createReducer(initialState, {
  [types.SET_USER_ORG](state, action) {
    return {
      ...state,
      org: action.value
    };
  },

  [types.SET_USER_NAME](state, action) {
    return {
      ...state,
      name: action.value
    };
  },

  [types.SET_USER_PASSWORD](state, action) {
    return {
      ...state,
      password: action.value
    };
  },

  [types.RESET_USER](state, action) {
    return initialState;
  },
});

export const userErrors = createReducer(initialState, {
  [types.SET_USER_ORG_ERROR](state, action) {
    return {
      ...state,
      org: action.message
    };
  },

  [types.SET_USER_NAME_ERROR](state, action) {
    return  {
      ...state,
      name: action.message
    };
  },

  [types.SET_USER_PASSWORD_ERROR](state, action) {
    return  {
      ...state,
      password: action.message
    };
  },
});
