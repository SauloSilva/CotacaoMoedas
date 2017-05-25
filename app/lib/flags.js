export function imageFlags(name) {
  let image = null;

  switch(name) {
    case 'ARS':
      image = require('../assets/flags/ARS.png')
      break;
    case 'AUD':
      image = require('../assets/flags/AUD.png')
      break;
    case 'CAD':
      image = require('../assets/flags/CAD.png')
      break;
    case 'CHF':
      image = require('../assets/flags/CHF.png')
      break;
    case 'CLP':
      image = require('../assets/flags/CLP.png')
      break;
    case 'CNY':
      image = require('../assets/flags/CNY.png')
      break;
    case 'COP':
      image = require('../assets/flags/COP.png')
      break;
    case 'DKK':
      image = require('../assets/flags/DKK.png')
      break;
    case 'EUR':
      image = require('../assets/flags/EUR.png')
      break;
    case 'GBP':
      image = require('../assets/flags/GBP.png')
      break;
    case 'ILS':
      image = require('../assets/flags/ILS.png')
      break;
    case 'JPY':
      image = require('../assets/flags/JPY.png')
      break;
    case 'KRW':
      image = require('../assets/flags/KRW.png')
      break;
    case 'MXN':
      image = require('../assets/flags/MXN.png')
      break;
    case 'NZD':
      image = require('../assets/flags/NZD.png')
      break;
    case 'NOK':
      image = require('../assets/flags/NOK.png')
      break;
    case 'PEN':
      image = require('../assets/flags/PEN.png')
      break;
    case 'SEK':
      image = require('../assets/flags/SEK.png')
      break;
    case 'USD':
      image = require('../assets/flags/USD.png')
      break;
    case 'UYU':
      image = require('../assets/flags/UYU.png')
      break;
    case 'ZAR':
      image = require('../assets/flags/ZAR.png')
      break;
    default:
      image = require('../assets/flags/MISSING.png')
      break;
  };

  return image;
}
