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
import { selectBpJson } from '../../../bus/modal/selectors';
import { selectModalDataFetchingState } from '../../../bus/ui/selectors';

// Styles
import { Header, HeadBox, HeadText } from '../styles';
import { Main, PreWrapper } from './styles';

const mapStateToProps = createStructuredSelector({
  modalDataFetchingState: selectModalDataFetchingState(),
  bpJson: selectBpJson(),
});

const mapDispatchToProps = dispach => ({
  actions: bindActionCreators(
    {
      fetchBpJson: modalActions.fetchBpJson,
      resetBpJsonStore: modalActions.resetBpJsonStore,
    },
    dispach
  ),
});

@connect(
  mapStateToProps,
  mapDispatchToProps
)
@translate()
export default class BpJson extends PureComponent {
  componentDidMount() {
    window.location.hash = `lynx.json`;
    this.getData();
  }

  componentWillUnmount() {
    const { resetBpJsonStore } = this.props.actions;

    const yScroll = window.pageYOffset;
    window.location.hash = ``;
    window.scroll(0, yScroll);

    resetBpJsonStore();
  }

  getData = () => {
    const { accountName } = this.props;
    const { fetchBpJson } = this.props.actions;

    fetchBpJson(accountName);
  };

  render() {
    const { t, bpJson } = this.props;

    return (
      <Fragment>
        <Header>
          <HeadBox>
            <HeadText>{t('i18nModal.i18nBpJson.title')}</HeadText>
          </HeadBox>
        </Header>
        <Main>{Object.keys(bpJson).length ? <PreWrapper>{JSON.stringify(bpJson, null, 2)}</PreWrapper> : null}</Main>
      </Fragment>
    );
  }
}

BpJson.propTypes = {
  t: PropTypes.func,
  actions: PropTypes.object,
  bpJson: PropTypes.array,
  accountName: PropTypes.string,
};
