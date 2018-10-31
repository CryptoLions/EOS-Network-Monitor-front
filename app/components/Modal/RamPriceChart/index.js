// Core
import React, { PureComponent, Fragment } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { translate } from 'react-i18next';

// Actions
import { modalActions } from '../../../bus/modal/actions';

// Selectors
import { selectRamPrice } from '../../../bus/modal/selectors';
import { selectModalDataFetchingState } from '../../../bus/ui/selectors';

// Components
import CustomChart from './CustomChart';

// Constants
import { chartOptions, selectOptions, datasetDefaults } from './options';

// Styles
import { Header, HeadBox, HeadText } from '../styles';
import { Main, StyledSelect, HeadContainer, Title } from './styles';

const mapStateToProps = createStructuredSelector({
  modalDataFetchingState: selectModalDataFetchingState(),
  ramPrice: selectRamPrice(),
});

const mapDispatchToProps = dispach => ({
  actions: bindActionCreators(
    {
      fetchRamPrice: modalActions.fetchRamPrice,
      resetRamPrice: modalActions.resetRamPriceStore,
    },
    dispach
  ),
});

@connect(
  mapStateToProps,
  mapDispatchToProps
)
@translate()
export default class RamPriceChart extends PureComponent {
  state = {
    selectedOption: selectOptions[0],
  };

  componentDidMount() {
    window.location.hash = `ramPrice`;
    const from = moment()
      .subtract(1, 'days')
      .toISOString();

    const to = moment().toISOString();
    this.getData(from, to);
  }

  componentWillReceiveProps(nextProps) {
    const { ramPrice } = this.props;
    if (ramPrice.length !== nextProps.ramPrice.length) {
      if (this.chart) this.chart.chart.destroy();

      this.chart = new CustomChart(
        this.canvas.getContext('2d'),
        { datasets: this.generateDatasets(nextProps.ramPrice) },
        this.generateInitialOptions()
      );
    }
  }

  componentWillUpdate(nextProps, nextState) {
    const { value } = this.state.selectedOption;

    if (nextState.selectedOption.value !== value) {
      const from = moment()
        .subtract(+nextState.selectedOption.value, 'days')
        .toISOString();
      const to = moment().toISOString();

      this.getData(from, to);
    }
  }

  componentWillUnmount() {
    const { resetRamPrice } = this.props.actions;

    const yScroll = window.pageYOffset;
    window.location.hash = ``;
    window.scroll(0, yScroll);
    resetRamPrice();
  }

  getData = (from, to) => {
    const { fetchRamPrice } = this.props.actions;

    fetchRamPrice(from, to);
  };

  generateDatasets = ramPrice => {
    const data = ramPrice.map(item => ({
      x: item.date,
      y: item.price,
    }));
    return [
      {
        ...datasetDefaults,
        borderColor: '#28a745',
        backgroundColor: '#28a745',
        data,
      },
    ];
  };

  generateInitialOptions = () => {
    const { value } = this.state.selectedOption;
    const options = {
      ...chartOptions,
    };

    options.scales.xAxes[0].time = {
      unit: value === '1' ? 'hour' : 'day',
    };

    return options;
  };

  handleSelect = selectedOption => {
    const { value } = this.state.selectedOption;

    if (selectedOption.value !== value) {
      this.setState({ selectedOption });
    }
  };

  render() {
    const { t } = this.props;
    const { selectedOption } = this.state;

    return (
      <Fragment>
        <Header>
          <HeadBox>
            <HeadText>{t('i18nModal.i18nRamPrice.title')}</HeadText>
          </HeadBox>
          <HeadContainer>
            <Title>EOS/kb RAM</Title>
            <StyledSelect
              options={selectOptions}
              onChange={this.handleSelect}
              value={selectedOption}
              isSearchable={false}
            />
          </HeadContainer>
        </Header>
        <Main>
          <canvas
            style={{ width: '100%', height: '500px' }}
            ref={canvas => {
              this.canvas = canvas;
            }}
          />
        </Main>
      </Fragment>
    );
  }
}

RamPriceChart.propTypes = {
  t: PropTypes.func,
  actions: PropTypes.object,
  ramPrice: PropTypes.array,
  resetRamPrice: PropTypes.func,
};
