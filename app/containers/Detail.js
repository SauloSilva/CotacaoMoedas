import React, { Component } from 'react'
import { connect } from 'react-redux';
import { ActionCreators } from '../actions';
import { bindActionCreators } from 'redux';
import styles from './styles/Detail.style';
import {
  ScrollView,
  View,
  Image,
  TouchableHighlight,
  Text,
} from 'react-native'
import { isEmpty } from 'lodash';
import { numberToCurrency, numberToPercentage } from '../lib/parsers';
import { imageFlags } from '../lib/flags';
import Icon from 'react-native-vector-icons/FontAwesome';

class Detail extends Component {
  iconInfo() {
    const { VENDA, ULTIMO } = this.props.navigation.state.params;

    if (VENDA > ULTIMO) {
      return {
        name: 'arrow-up',
        color: '#4cb050',
      }
    } else if (VENDA < ULTIMO) {
      return {
        name: 'arrow-down',
        color: '#bb3b3b',
      }
    } else {
      return {
        name: 'minus',
        color: '#7f7f7f',
      }
    }
  }

  render() {
    const { PAPEL, DESCRICAO, COMPRA, VENDA, VARIACAO, DATA, HORA } = this.props.navigation.state.params;

    return <ScrollView style={styles.scene}>
      <View>
        <View style={styles.description}>
          <Image style={styles.descriptionFlag} source={imageFlags(PAPEL)}/>
          <Text style={styles.descriptionText }>{DESCRICAO}</Text>
        </View>

        <View style={styles.buy}>
          <Text style={styles.buyLabel}>Compra</Text>

          <View style={styles.buyTextWrapper}>
            <Text style={styles.buyText}>{numberToCurrency(COMPRA)}</Text>
            <Icon name={this.iconInfo().name} size={30} color={this.iconInfo().color} style={styles.buyIcon} />
          </View>
        </View>

        <View style={styles.sell}>
          <Text style={styles.sellLabel}>Venda</Text>
          <Text style={styles.sellText}>{numberToCurrency(VENDA)}</Text>
        </View>

        <View style={styles.variation}>
          <Text style={styles.variationLabel}>Variação</Text>
          <Text style={styles.variationText}>{numberToPercentage(VARIACAO)}</Text>
        </View>

        <View style={styles.date}>
          <Text style={styles.dateLabel}>Data da atualização</Text>
          <View style={styles.dateTimeWrapper}>
            <Text style={styles.dateText}>{DATA}</Text>
            <Text style={styles.hourText}>{HORA}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    exchangeRates: state.exchangeRates,
    currentExchangeRate: state.currentExchangeRate,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
