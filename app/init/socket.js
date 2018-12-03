// Core
import io from 'socket.io-client';
import throttle from 'lodash/throttle';

// Actions
import { producerActions } from '../bus/producers/actions';
import { transactionActions } from '../bus/transactions/actions';
import { generalStatsActions } from '../bus/generalStats/actions';
import { modalActions } from '../bus/modal/actions';
import { uiActions } from '../bus/ui/actions';

// Constants
import { THROTTLE_TIMEOUT } from '../constants';

class SocketClient {
  init = ({ dispatch, getState }) => {
    this.dispatch = dispatch;
    this.getState = getState;
    this.socket = io(process.env.API_URL);

    this.transactions = [];
  };

  connect() {
    this.socket.on('connect', () => {
      // Producers fetch
      this.dispatch(producerActions.fetchProducers());
      // Black list fetch
      this.dispatch(producerActions.fetchBlackList());
      // Producers update
      this.socket.on('table', data => this.dispatch(producerActions.producersUpdate(data)));
    });

    this.socket.on('disconnect', () => {
      console.log('disconnect');
    });

    // Background init
    this.socket.once('info', data =>
      this.dispatch(uiActions.setActualBackgroundNumber(Math.floor(data.head_block_num / 5000000)))
    );

    // Transactions
    this.socket.on('transactions', data => this.dispatch(transactionActions.transactionsAdd(data)));

    // Reload producers
    this.socket.on('reload_producers', data => this.dispatch(producerActions.producersReload(data)));

    // The blacklist
    this.socket.on('theblacklist', data => this.dispatch(producerActions.blackListUpdate(data)));

    // general stats
    this.socket.on(
      'totalstaked',
      throttle(data => this.dispatch(generalStatsActions.totalStackedUpdate(data)), THROTTLE_TIMEOUT)
    );

    this.socket.on(
      'unregistereds',
      throttle(data => this.dispatch(generalStatsActions.unregisteredBpsUpdate(data)), THROTTLE_TIMEOUT)
    );

    this.socket.on(
      'blockupdate',
      throttle(data => this.dispatch(generalStatsActions.tpsApsStatsUpdate(data)), THROTTLE_TIMEOUT)
    );

    this.socket.on('blockchart', data => {
      this.dispatch(generalStatsActions.blockChartUpdate(data.slice(-15)));
    });

    this.socket.on('usersonline', data => this.dispatch(generalStatsActions.connectedUsersUpdate(data)));

    // CurrentBlockInfo & tracking background change

    this.socket.on('info', data => {
      const rest = data.head_block_num % 5000000;
      if (rest === 0) {
        this.dispatch(uiActions.setActualBackgroundNumber(data.head_block_num / 5000000));
      }
      this.dispatch(generalStatsActions.lastBlockStatsUpdate(data));
    });

    // Modal
    this.socket.on('api', data => {
      this.dispatch(modalActions.soketFetchingApiResponseSuccess(data));
      this.dispatch(uiActions.setModalDataFetchingState(false));
    });

    this.socket.on('TXinfo_res', data => {
      this.dispatch(modalActions.soketFetchingTxInfoSuccess(data));
      this.dispatch(uiActions.setModalDataFetchingState(false));
    });

    // Reload page
    this.socket.on('reload_page', () => {
      if (!window.caches) {
        return console.log('No window caches ===', window.caches);
      }
      window.caches.keys().then(res => {
        if (!res) {
          console.log('No cache === ', res);
        }
        res.forEach(elem => {
          window.caches.delete(elem);
        });
        window.location.reload();
      });
    });

    // Debug
    this.socket.on('reload', () => {
      window.location.reload();
    });

    this.socket.on('console', msg => {
      console.log('console', msg);
    });

    this.socket.on('error', msg => {
      console.log('error', msg);
    });
  }

  // transactions toggle
  emitTransactionsSocketOn = () =>
    this.socket.on('transactions', data => this.dispatch(transactionActions.transactionsAdd(data)));

  emitTransactionsSocketOff = () => this.socket.off('transactions');
}

export default new SocketClient();
