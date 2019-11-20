import EosApi from 'eosjs-api';

export const CHAIN_ID = 'b62febe5aadff3d5399090b9565cb420387d3c66f2ccd7c7ac1f532c4f50f573';

export const THROTTLE_TIMEOUT = 600;

export const API_KEY = 'AIzaSyBJrgbdsOfzPMKQFcsnXJHtbwxlVglXkVw';

// how many transaction do we keep in the reducer
export const TRANSACTIONS_LIMIT = 50;

export const HISTORY_ITEMS_PER_PAGE = 10;

// Eos API
export const EOS = EosApi({
  httpEndpoint: 'https://lynx.cryptolions.io',
});
