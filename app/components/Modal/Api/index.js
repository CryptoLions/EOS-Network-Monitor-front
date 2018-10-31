// Core
import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { translate } from 'react-i18next';

// Components
import LoadingLine from '../../LoadingLine';

// Select options
import options from './options';

// Actions
import { modalActions } from '../../../bus/modal/actions';

// Selectors
import { selectEosApiData } from '../../../bus/modal/selectors';
import { selectModalDataFetchingState } from '../../../bus/ui/selectors';

// Styles
import { Main, GetButton, Header, HeadBox, HeadText } from '../styles';
import { PreWrapper, InputsContainer, ApiInput, HeadContainerBI, StyledSelect, InputsJson } from './styles';

const mapStateToProps = createStructuredSelector({
  modalDataFetchingState: selectModalDataFetchingState(),
  eosApiData: selectEosApiData(),
});

const mapDispatchToProps = dispach => ({
  actions: bindActionCreators(
    {
      resetEosApiStore: modalActions.resetEosApiStore,
      getInfoAction: modalActions.getInfo,
      getBlockAction: modalActions.getBlock,
      getBlockHeaderStateAction: modalActions.getBlockHeaderState,
      getAccountAction: modalActions.getAccount,
      getAbiAction: modalActions.getAbi,
      getRawCodeAndAbiAction: modalActions.getRawCodeAndAbi,
      getTableRowsAction: modalActions.getTableRows,
      getCurrencyBalanceAction: modalActions.getCurrencyBalance,
      getCurrencyStatsAction: modalActions.getCurrencyStats,
      getProducersAction: modalActions.getProducers,
    },
    dispach
  ),
});

@connect(
  mapStateToProps,
  mapDispatchToProps
)
@translate()
export default class Api extends PureComponent {
  state = {
    selectedOption: options[1],
    getAccount: '',
    getAbi: '',
    getBlock: '',
    getBlockHeaderState: '',
    getRawCodeAndAbi: '',
    getTableRowsJson: '',
    getTableRowsCode: '',
    getTableRowsScope: '',
    getTableRowsTable: '',
    getTableRowsTableKey: '',
    getTableRowsLowerBound: '',
    getTableRowsUpperBound: '',
    getTableRowsLimit: '',
    getCurrencyBalanceСode: '',
    getCurrencyBalanceAccount: '',
    getCurrencyBalanceSymbol: '',
    getCurrencyStatsСode: '',
    getCurrencyStatsSymbol: '',
    getProducersJson: '',
    getProducersLowerBound: '',
    getProducersLimit: '',
  };

  componentDidMount() {
    window.location.hash = `api`;
  }

  componentWillUnmount() {
    const { resetEosApiStore } = this.props.actions;
    const yScroll = window.pageYOffset;
    window.location.hash = ``;
    window.scroll(0, yScroll);
    resetEosApiStore();
  }

  onFieldChange = e => this.setState({ [e.target.name]: e.target.value });

  // eslint-disable-next-line
  getData = () => {
    const { selectedOption } = this.state;
    const { value } = selectedOption;

    if (!this.props.modalDataFetchingState) {
      return this.props.actions[`${value}Action`]({ ...this.state });
    }
  };

  // eslint-disable-next-line
  handleData = () => {
    const { modalDataFetchingState, eosApiData } = this.props;

    if (!modalDataFetchingState) {
      if (Object.keys(eosApiData).length) {
        return eosApiData.error ? <span>Error</span> : <PreWrapper>{JSON.stringify(eosApiData, null, 2)}</PreWrapper>;
      }
      return null;
    }
  };

  handleSelect = selectedOption => {
    const { resetEosApiStore } = this.props.actions;

    if (Object.keys(selectedOption).length) {
      this.setState({ selectedOption });
      resetEosApiStore();
    }
  };

  displayInputs = () => {
    const {
      selectedOption,
      getAbi,
      getAccount,
      getBlockHeaderState,
      getBlock,
      getRawCodeAndAbi,
      getTableRowsScope,
      getTableRowsJson,
      getTableRowsCode,
      getTableRowsTable,
      getTableRowsTableKey,
      getTableRowsLowerBound,
      getTableRowsUpperBound,
      getTableRowsLimit,
      getCurrencyBalanceСode,
      getCurrencyBalanceAccount,
      getCurrencyBalanceSymbol,
      getCurrencyStatsСode,
      getCurrencyStatsSymbol,
      getProducersJson,
      getProducersLowerBound,
      getProducersLimit,
    } = this.state;
    const { value } = selectedOption;

    switch (value) {
      case 'getInfo':
        return null;
      case 'getBlock':
        return (
          <div>
            <InputsContainer>
              <ApiInput value={getBlock} placeholder="block_num_or_id" name="getBlock" onChange={this.onFieldChange} />
            </InputsContainer>
            <InputsJson>
              <PreWrapper>
                {JSON.stringify(
                  {
                    block_num_or_id: getBlock,
                  },
                  null,
                  2
                )}
              </PreWrapper>
            </InputsJson>
          </div>
        );
      case 'getBlockHeaderState':
        return (
          <div>
            <InputsContainer>
              <ApiInput
                value={getBlockHeaderState}
                placeholder="block_num_or_id"
                name="getBlockHeaderState"
                onChange={this.onFieldChange}
              />
            </InputsContainer>
            <InputsJson>
              <PreWrapper>
                {JSON.stringify(
                  {
                    block_num_or_id: getBlockHeaderState,
                  },
                  null,
                  2
                )}
              </PreWrapper>
            </InputsJson>
          </div>
        );
      case 'getAccount':
        return (
          <div>
            <InputsContainer>
              <ApiInput value={getAccount} placeholder="account_name" name="getAccount" onChange={this.onFieldChange} />
            </InputsContainer>
            <InputsJson>
              <PreWrapper>
                {JSON.stringify(
                  {
                    account_name: getAccount,
                  },
                  null,
                  2
                )}
              </PreWrapper>
            </InputsJson>
          </div>
        );
      case 'getAbi':
        return (
          <div>
            <InputsContainer>
              <ApiInput value={getAbi} placeholder="account_name" name="getAbi" onChange={this.onFieldChange} />
            </InputsContainer>
            <InputsJson>
              <PreWrapper>
                {JSON.stringify(
                  {
                    account_name: getAbi,
                  },
                  null,
                  2
                )}
              </PreWrapper>
            </InputsJson>
          </div>
        );
      case 'getRawCodeAndAbi':
        return (
          <div>
            <InputsContainer>
              <ApiInput
                value={getRawCodeAndAbi}
                placeholder="account_name"
                name="getRawCodeAndAbi"
                onChange={this.onFieldChange}
              />
            </InputsContainer>
            <InputsJson>
              <PreWrapper>
                {JSON.stringify(
                  {
                    account_name: getRawCodeAndAbi,
                  },
                  null,
                  2
                )}
              </PreWrapper>
            </InputsJson>
          </div>
        );
      case 'getTableRows':
        return (
          <div>
            <InputsContainer>
              <ApiInput
                value={getTableRowsJson}
                placeholder="json"
                name="getTableRowsJson"
                onChange={this.onFieldChange}
              />
              <ApiInput
                value={getTableRowsCode}
                placeholder="code"
                name="getTableRowsCode"
                onChange={this.onFieldChange}
              />
              <ApiInput
                value={getTableRowsScope}
                placeholder="scope"
                name="getTableRowsScope"
                onChange={this.onFieldChange}
              />
              <ApiInput
                value={getTableRowsTable}
                placeholder="table"
                name="getTableRowsTable"
                onChange={this.onFieldChange}
              />
              <ApiInput
                value={getTableRowsTableKey}
                placeholder="table_key"
                name="getTableRowsTableKey"
                onChange={this.onFieldChange}
              />
              <ApiInput
                value={getTableRowsLowerBound}
                placeholder="lower_bound"
                name="getTableRowsLowerBound"
                onChange={this.onFieldChange}
              />
              <ApiInput
                value={getTableRowsUpperBound}
                placeholder="upper_bound"
                name="getTableRowsUpperBound"
                onChange={this.onFieldChange}
              />
              <ApiInput
                value={getTableRowsLimit}
                placeholder="limit"
                name="getTableRowsLimit"
                onChange={this.onFieldChange}
              />
            </InputsContainer>
            <InputsJson>
              <PreWrapper>
                {JSON.stringify(
                  {
                    json: getTableRowsJson === 'true',
                    code: getTableRowsCode,
                    scope: getTableRowsScope,
                    table: getTableRowsTable,
                    table_key: getTableRowsTableKey,
                    lower_bound: getTableRowsLowerBound,
                    upper_bound: getTableRowsUpperBound,
                    limit: +getTableRowsLimit,
                  },
                  null,
                  2
                )}
              </PreWrapper>
            </InputsJson>
          </div>
        );
      case 'getCurrencyBalance':
        return (
          <div>
            <InputsContainer>
              <ApiInput
                value={getCurrencyBalanceСode}
                placeholder="code"
                name="getCurrencyBalanceСode"
                onChange={this.onFieldChange}
              />
              <ApiInput
                value={getCurrencyBalanceAccount}
                placeholder="account"
                name="getCurrencyBalanceAccount"
                onChange={this.onFieldChange}
              />
              <ApiInput
                value={getCurrencyBalanceSymbol}
                placeholder="symbol"
                name="getCurrencyBalanceSymbol"
                onChange={this.onFieldChange}
              />
            </InputsContainer>
            <InputsJson>
              <PreWrapper>
                {JSON.stringify(
                  {
                    code: getCurrencyBalanceСode,
                    account: getCurrencyBalanceAccount,
                    symbol: getCurrencyBalanceSymbol,
                  },
                  null,
                  2
                )}
              </PreWrapper>
            </InputsJson>
          </div>
        );
      case 'getCurrencyStats':
        return (
          <div>
            <InputsContainer>
              <ApiInput
                value={getCurrencyStatsСode}
                placeholder="code"
                name="getCurrencyStatsСode"
                onChange={this.onFieldChange}
              />
              <ApiInput
                value={getCurrencyStatsSymbol}
                placeholder="symbol"
                name="getCurrencyStatsSymbol"
                onChange={this.onFieldChange}
              />
            </InputsContainer>
            <InputsJson>
              <PreWrapper>
                {JSON.stringify(
                  {
                    code: getCurrencyStatsСode,
                    symbol: getCurrencyStatsSymbol,
                  },
                  null,
                  2
                )}
              </PreWrapper>
            </InputsJson>
          </div>
        );
      case 'getProducers':
        return (
          <div>
            <InputsContainer>
              <ApiInput
                value={getProducersJson}
                placeholder="json"
                name="getProducersJson"
                onChange={this.onFieldChange}
              />
              <ApiInput
                value={getProducersLowerBound}
                placeholder="lower_bound"
                name="getProducersLowerBound"
                onChange={this.onFieldChange}
              />
              <ApiInput
                value={getProducersLimit}
                placeholder="limit"
                name="getProducersLimit"
                onChange={this.onFieldChange}
              />
            </InputsContainer>
            <InputsJson>
              <PreWrapper>
                {JSON.stringify(
                  {
                    json: getProducersJson === 'true',
                    lower_bound: getProducersLowerBound,
                    limit: +getProducersLimit,
                  },
                  null,
                  2
                )}
              </PreWrapper>
            </InputsJson>
          </div>
        );
      default:
        return null;
    }
  };

  render() {
    const { selectedOption } = this.state;
    const { t, modalDataFetchingState } = this.props;

    return (
      <Fragment>
        <Header>
          <HeadBox>
            <HeadText>{t('i18nModal.i18nApi.title')}</HeadText>
          </HeadBox>
          <HeadContainerBI>
            <StyledSelect options={options} onChange={this.handleSelect} value={selectedOption} />
            <GetButton onClick={this.getData}>{t('i18nModal.i18nApi.getButton')}</GetButton>
          </HeadContainerBI>
          {this.displayInputs()}
        </Header>
        <LoadingLine state={modalDataFetchingState} />
        <Main>{this.handleData()}</Main>
      </Fragment>
    );
  }
}

Api.propTypes = {
  t: PropTypes.func,
  modalDataFetchingState: PropTypes.bool,
  actions: PropTypes.object,
  eosApiData: PropTypes.object,
};
