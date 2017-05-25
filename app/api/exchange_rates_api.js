import Api from '../lib/api'
import X2JS from 'x2js';

export function exchangeRatesAPI(org, login, password) {
  return Api.get(`https://webservice.enfoque.com.br/ws${org}/cotacoes.asmx/Moedas?login=${login}&senha=${password}`);
}

export function exchangeRatesParseResponse(response) {
  x2js = new X2JS();
  return x2js.xml2js(response).QUOTES.QUOTE;
}
