import * as types from './types'
import { exchangeRatesAPI, exchangeRatesParseResponse } from '../api/exchange_rates_api'

export function fetchExchangeRates(org, login, password) {
  return (dispatch, getState) => {
    exchangeRatesAPI(org, login, password)
      .then((response) => {
        if (response.ok) {
          console.log(response);
          return response.text();
        } else {
          return false;
        }
      }).then((responseData) => {
        if (responseData) {
          let exchangeRates = exchangeRatesParseResponse(responseData);
          dispatch(setExchangeRates({exchangeRates: exchangeRates}));
        } else {
          dispatch(setAPIError());
        }
      }).catch((error) => {
        console.log(error)
      });
  }
}

export function setSearchingExchangeRates() {
  return {
    type: types.SET_SEARCHING_EXCHANGE_RATES,
    searchingExchangeRates: true,
  }
}

export function setExchangeRates({ exchangeRates }) {
  return {
    type: types.SET_EXCHANGE_RATES,
    exchangeRates
  }
}

export function setAPIError() {
  return {
    type: types.SET_API_ERROR
  }
}
