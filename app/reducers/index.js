import { combineReducers } from 'redux';
import * as exchangeRatesReducer from './exchange_rates';
import * as usersReducer from './users';

export default combineReducers(Object.assign(
  exchangeRatesReducer,
  usersReducer,
));
