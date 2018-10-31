// Core
import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { translate } from 'react-i18next';

// Actions
import { modalActions } from '../../../bus/modal/actions';

// Selectors
import { selectBlockChart } from '../../../bus/generalStats/selectors';
import { selectModalDataFetchingState } from '../../../bus/ui/selectors';

// Components
import CustomChart from './CustomChart';

// Constants
import { chartOptions, datasetDefaults } from './options';

// Styles
import { Header, HeadBox, HeadText } from '../styles';
import { Main } from './styles';

const mapStateToProps = createStructuredSelector({
  modalDataFetchingState: selectModalDataFetchingState(),
  blockChart: selectBlockChart(),
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
export default class LiveTpsChart extends PureComponent {
  componentDidMount() {
    window.location.hash = `liveTps`;
    const { blockChart } = this.props;

    this.chart = new CustomChart(
      this.canvas.getContext('2d'),
      { datasets: this.generateDatasets(blockChart) },
      this.generateInitialOptions()
    );
  }

  componentWillReceiveProps(nextProps) {
    this.chart.update({
      datasets: this.generateDatasets(nextProps.blockChart),
    });
  }

  componentWillUnmount() {
    const yScroll = window.pageYOffset;
    window.location.hash = ``;
    window.scroll(0, yScroll);
  }

  getData = (from, to) => {
    const { fetchRamPrice } = this.props.actions;

    fetchRamPrice(from, to);
  };

  generateDatasets = blockChart => {
    const data = blockChart.map(item => ({
      x: item.timestamp,
      y: item.liveTps,
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
    const options = {
      ...chartOptions,
    };

    return options;
  };

  render() {
    const { t } = this.props;

    return (
      <Fragment>
        <Header>
          <HeadBox>
            <HeadText>{t('i18nModal.i18nLiveTps.title')}</HeadText>
          </HeadBox>
        </Header>
        <Main>
          <canvas
            style={{ width: '100%', height: '200px' }}
            ref={canvas => {
              this.canvas = canvas;
            }}
          />
        </Main>
      </Fragment>
    );
  }
}

LiveTpsChart.propTypes = {
  t: PropTypes.func,
  actions: PropTypes.object,
  blockChart: PropTypes.array,
};
