import createReducer from '../lib/createReducer';
import * as types from '../actions/types';
import { parseCurrencyName, parseDescription } from '../lib/parsers';

export const searchingExchangeRates = createReducer(false, {
  [types.SET_SEARCHING_EXCHANGE_RATES](state, action) {
    return action.searchingExchangeRates;
  },

  [types.SET_EXCHANGE_RATES](state, action) {
    return false;
  },

  [types.SET_API_ERROR](state, action) {
    return false;
  },
})

export const exchangeRates = createReducer([], {
  [types.SET_SEARCHING_EXCHANGE_RATES](state, action) {
    return [];
  },

  [types.SET_EXCHANGE_RATES](state, action) {
    return action.exchangeRates.map((exchangeRate, i) => {
      return {
        ID: i,
        COMPRA: exchangeRate.COMPRA,
        DATA: exchangeRate.DATA,
        DESCRICAO: parseDescription(exchangeRate.DESCRICAO),
        HORA: exchangeRate.HORA,
        PAPEL: parseCurrencyName(exchangeRate.PAPEL),
        ULTIMO: exchangeRate.ULTIMO,
        VARIACAO: exchangeRate.VARIACAO,
        VENDA: exchangeRate.VENDA,
      }
    });
  }
})

export const apiError = createReducer(null, {
  [types.RESET_USER](state, action) {
    return null;
  },

  [types.SET_API_ERROR](state, action) {
    return 'Usuário ou senha inválidos';
  }
})

export const exchangeRatesCount = createReducer(0, {
  [types.SET_EXCHANGE_RATES](state, action) {
    return action.exchangeRates.length;
  }
})
