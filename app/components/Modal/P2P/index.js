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
import { selectP2PAddresses } from '../../../bus/modal/selectors';
import { selectModalDataFetchingState } from '../../../bus/ui/selectors';

// Styles
import { Header, HeadBox, HeadText } from '../styles';
import { Main, P2PWrapper } from './styles';

const mapStateToProps = createStructuredSelector({
  modalDataFetchingState: selectModalDataFetchingState(),
  p2pAddresses: selectP2PAddresses(),
});

const mapDispatchToProps = dispach => ({
  actions: bindActionCreators(
    {
      fetchP2PAddresses: modalActions.fetchP2PAddresses,
    },
    dispach
  ),
});

@connect(
  mapStateToProps,
  mapDispatchToProps
)
@translate()
export default class P2P extends PureComponent {
  componentDidMount() {
    window.location.hash = `p2p`;
    this.getData();
  }

  componentWillUnmount() {
    const yScroll = window.pageYOffset;
    window.location.hash = ``;
    window.scroll(0, yScroll);
  }

  getData = () => {
    const { fetchP2PAddresses } = this.props.actions;

    fetchP2PAddresses();
  };

  displayP2PList = () => {
    const { p2pAddresses } = this.props;
    const p2pList = [];

    p2pAddresses.forEach(address => address.p2p.forEach(item => p2pList.push(item)));

    return p2pList.map((p2pItem, index) => <P2PWrapper key={index}>{`p2p-peer-address = ${p2pItem}`}</P2PWrapper>);
  };

  render() {
    const { t, p2pAddresses } = this.props;

    return (
      <Fragment>
        <Header>
          <HeadBox>
            <HeadText>{t('i18nModal.i18nP2P.title')}</HeadText>
          </HeadBox>
        </Header>
        <Main>{p2pAddresses.length && this.displayP2PList()}</Main>
      </Fragment>
    );
  }
}

P2P.propTypes = {
  t: PropTypes.func,
  actions: PropTypes.object,
  p2pAddresses: PropTypes.array,
};
