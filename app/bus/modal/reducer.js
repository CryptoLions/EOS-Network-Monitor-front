// Types
import types from './types';

const initialState = {
  accountInfo: {},
  accountHistory: {},
  blockInfo: {},
  txInfo: {},
  p2pAddresses: [],
  bpJson: {},
  ramPrice: [],
  eosApiData: {},
};

export const modalReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.FETCHING_ACCOUNT_INFO_SUCCESS:
      return {
        ...state,
        accountInfo: payload,
      };

    case types.FETCHING_ACCOUNT_HISTORY_SUCCESS:
      return {
        ...state,
        accountHistory: payload,
      };

    case types.FETCHING_BLOCK_INFO_SUCCESS:
      return {
        ...state,
        blockInfo: payload,
      };

    case types.FETCHING_TX_INFO_SUCCESS:
      return {
        ...state,
        txInfo: payload,
      };
    case types.FETCHING_TX_INFO_FAILURE:
      return {
        ...state,
        txInfo: {},
      };
    case types.FETCHING_P2P_ADDRESSES_SUCCESS:
      return {
        ...state,
        p2pAddresses: payload,
      };
    case types.FETCHING_BP_JSON_SUCCESS:
      return {
        ...state,
        bpJson: payload,
      };
    case types.FETCHING_RAM_PRICE_SUCCESS:
      return {
        ...state,
        ramPrice: payload,
      };
    case types.EOS_API_SUCCESS:
      return {
        ...state,
        eosApiData: payload,
      };
    case types.EOS_API_FAILURE:
      return {
        ...state,
        eosApiData: { error: true },
      };
    case types.RESET_RAM_PRICE:
      return {
        ...state,
        ramPrice: [],
      };
    case types.RESET_EOS_API:
      return {
        ...state,
        eosApiData: {},
      };
    case types.RESET_BP_JSON:
      return {
        ...state,
        bpJson: {},
      };
    default:
      return state;
  }
};
