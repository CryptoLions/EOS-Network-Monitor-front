import EosApi from 'eosjs-api';

export const CHAIN_ID = 'f778f7d2f124b110e0a71245b310c1d0ac1a0edd21f131c5ecb2e2bc03e8fe2e';

export const THROTTLE_TIMEOUT = 600;

export const API_KEY = 'AIzaSyBJrgbdsOfzPMKQFcsnXJHtbwxlVglXkVw';

// how many transaction do we keep in the reducer
export const TRANSACTIONS_LIMIT = 50;

export const HISTORY_ITEMS_PER_PAGE = 10;

// Eos API
export const EOS = EosApi({
  httpEndpoint: 'https://api.xec.cryptolions.io',
});
