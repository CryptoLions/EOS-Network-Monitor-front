// Core
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Components
import AccountInfo from './AccountInfo';
import AccountHistory from './AccountHistory';
import BlockInfo from './BlockInfo';
import Vote from './Vote';
import Transactions from './Transactions';
import Legend from './Legend';
import Api from './Api';
import P2P from './P2P';
import BpJson from './BpJson';
import ErrorMessage from './ErrorMessage';
import RamPriceChart from './RamPriceChart';
import LiveTpsChart from './LiveTpsChart';

// Styles
import { ModalWrapper, ModalContainer, Cross } from './styles';

export default class Modal extends PureComponent {
  getModalContent = () => {
    const { type, data } = this.props.modal;

    switch (type) {
      case 'accountInfo':
        return <AccountInfo accountName={data} />;
      case 'accountHistory':
        return <AccountHistory accountName={data} />;
      case 'blockInfo':
        return <BlockInfo data={data} />;
      case 'vote':
        return <Vote data={data} />;
      case 'transactions':
        return <Transactions txId={data} />;
      case 'legend':
        return <Legend />;
      case 'api':
        return <Api />;
      case 'p2p':
        return <P2P />;
      case 'bpJson':
        return <BpJson accountName={data} />;
      case 'errorMessage':
        return <ErrorMessage data={data} />;
      case 'ramChart':
        return <RamPriceChart />;
      case 'liveTpsChart':
        return <LiveTpsChart />;
      default:
        return null;
    }
  };

  stopPropagation = e => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  };

  hideModal = () => this.props.toggleModal('', null);

  render() {
    return (
      <ModalWrapper onClick={this.hideModal}>
        <ModalContainer onClick={this.stopPropagation}>
          <Cross onClick={this.hideModal} />
          {this.getModalContent()}
        </ModalContainer>
      </ModalWrapper>
    );
  }
}

Modal.propTypes = {
  modal: PropTypes.object,
  toggleModal: PropTypes.func,
};
