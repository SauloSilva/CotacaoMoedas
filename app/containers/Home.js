import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'
import { isEmpty } from 'lodash'
import { numberToCurrency } from '../lib/parsers';
import { imageFlags } from '../lib/flags';
import styles from './styles/Home.style';
import Spinner from 'react-native-loading-spinner-overlay';

import {
  View,
  Text,
  TouchableHighlight,
  ScrollView,
  Image
} from 'react-native';

import {
  Cell,
  Section,
  TableView,
} from 'react-native-tableview-simple';

class Home extends Component {
  componentDidMount() {
    console.log('componentDidMount');
    this.fetchExchangeRates();
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
    if (!isEmpty(this.props.apiError)) {
      console.log('into if of componentDidUpdate')
      this.props.resetUser();
      this.props.navigation.navigate('Login')
    }

    return true;
  }

  fetchExchangeRates() {
    console.log('fetchExchangeRates');
    let {org, name, password} = this.props.user;

    this.props.setSearchingExchangeRates();
    this.props.fetchExchangeRates(org, name, password);
  }

  color(exchangeRate) {
    console.log('color');
    if (exchangeRate.VENDA > exchangeRate.ULTIMO) {
      return '#4cb050';
    } else if (exchangeRate.VENDA < exchangeRate.ULTIMO) {
      return '#bb3b3b';
    } else {
      return '#7f7f7f';
    }
  }

  render() {
    console.log('render');
    let { exchangeRates, searchingExchangeRates, apiError } = this.props;

    return (<View style={styles.scene}>
      <Spinner visible={searchingExchangeRates} textContent={"Atualizando..."} textStyle={{color: '#FFF'}} />

      {!isEmpty(exchangeRates) && <ScrollView>
        <TableView>
          <Section header="Cotações" footer={this.props.exchangeRatesCount + " cotações de moedas encontradas!"}>
            {exchangeRates.map((exchangeRate) => {
              return <Cell
                cellStyle="RightDetail"
                rightDetailColor={this.color(exchangeRate)}
                accessory="DetailDisclosure"
                title={exchangeRate.DESCRICAO}
                detail={numberToCurrency(exchangeRate.VENDA)}
                onPress={() => this.props.navigation.navigate('Detail', {...exchangeRate}) }
                key={exchangeRate.ID}
                image={
                  <Image
                    style={{ borderRadius: 5 }}
                    source={imageFlags(exchangeRate.PAPEL)}
                  />
                }
                />
            })}
          </Section>
        </TableView>
      </ScrollView>}
    </View>)
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    apiError: state.apiError,
    exchangeRates: state.exchangeRates,
    exchangeRatesCount: state.exchangeRatesCount,
    searchingExchangeRates: state.searchingExchangeRates,
    user: state.user,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
