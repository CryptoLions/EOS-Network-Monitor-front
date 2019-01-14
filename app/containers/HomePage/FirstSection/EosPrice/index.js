// Core
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

import { chartOptions } from './options';
// import { SvgSpinner } from '../svg';

// Components
import CustomChart from './customChart';

// Styles
import { Wrapper, Header, HeaderSpan, TextSpan, GreenSpan } from '../styles';
import { Container } from './styles';

@translate()
export default class EosPrice extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      eosPrice: null,
    };
  }

  componentDidMount() {
    this.getMainData();
    this.interval = setInterval(this.getMainData, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getMainData = () => {
    const header = new Headers({
      'Access-Control-Allow-Origin': '*',
    });
    const options = {
      method: 'GET',
      mode: 'cors',
      header,
    };
    fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=EOS&tsyms=USD', options)
      .then(response => response.json())
      .then(data => {
        if (data && data.DISPLAY && data.DISPLAY.EOS && data.DISPLAY.EOS.USD) {
          this.setState({ eosPrice: data.DISPLAY.EOS.USD.PRICE });
        }
      })
      .catch(err => console.error(err));
    fetch('https://min-api.cryptocompare.com/data/histohour?fsym=EOS&tsym=USD&limit=24&aggregate=3&e=CCCAGG', options)
      .then(response => response.json())
      .then(data => {
        if (data && data.Data) {
          this.chart = new CustomChart(
            this.canvas.getContext('2d'),
            { datasets: this.generateDatasets(data.Data) },
            chartOptions
          );
        }
      })
      .catch(err => console.error(err));
  };

  generateDatasets = price => {
    const data = price.map(item => ({
      x: item.time * 1000,
      y: item.close,
    }));
    return [
      {
        fill: false,
        borderWidth: 2,
        lineTension: 0,
        pointRadius: 0,
        borderColor: '#28a745',
        backgroundColor: '#28a745',
        data,
      },
    ];
  };

  render() {
    const { t } = this.props;
    const { eosPrice } = this.state;

    return (
      <Wrapper>
        <Header>
          <HeaderSpan>{t('i18nFirstSection.i18nEosPrice.title')}</HeaderSpan>
        </Header>
        <Container>
          <TextSpan>
            EOS/usd - <GreenSpan>{eosPrice}</GreenSpan>
          </TextSpan>
          <canvas
            style={{ width: '100%', height: '100px', marginTop: '10px' }}
            ref={canvas => {
              this.canvas = canvas;
            }}
          />
        </Container>
      </Wrapper>
    );
  }
}

EosPrice.propTypes = {
  t: PropTypes.func,
};
