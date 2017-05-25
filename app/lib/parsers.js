import { replace } from 'lodash';

export function parseCurrencyName(name) {
  name = replace(name, 'EUSCOM1', 'USD');
  name = replace(name, 'BRL', '');

  return name;
}

export function parseDescription(description) {
  description = replace(description, '/Real', '');
  description = replace(description, ' Comercial (Mercado)', '');
  description = replace(description, ' - Comunidade Europeia', '');
  description = replace(description, '- Reino Unido', '');

  return description;
}

export function numberToCurrency(number) {
  return `R$ ${number}`
}

export function numberToPercentage(number) {
  return `${number} %`
}
