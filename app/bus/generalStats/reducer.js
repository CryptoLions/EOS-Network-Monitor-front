import types from './types';

const initialState = {
  lastBlockStats: {},
  tpsApsStats: {
    stackedTotal: null,
    maxTps: 0,
    liveTps: 0,
    maxAps: 0,
    liveAps: 0,
  },
  additionalInfoStats: {
    maxRamSize: 0,
    ramUsed: 0,
    totalActivatedStake: null,
    totalUnpaidBlocks: 0,
    eosioRamFee: undefined,
    eosioSaving: undefined,
  },
  blockChart: [],
  unregisteredBps: [],
  connectedUsers: 0,
};

export const generalStatsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.LAST_BLOCK_STATS_UPDATE:
      return {
        ...state,
        lastBlockStats: {
          ...state.lastBlockStats,
          ...payload,
        },
        additionalInfoStats: {
          maxRamSize: payload.maxRamSize / 1073741824,
          ramUsed: payload.totalRamUsed,
          totalActivatedStake: payload.totalActivatedStake / 10000,
          totalUnpaidBlocks: payload.totalUnpaidBlocks,
          eosioRamFee: payload.coreLiquidBalance,
          eosioSaving: payload.savingTotalBalance,
        },
      };
    case types.TOTAL_STACKED_UPDATE:
      return {
        ...state,
        tpsApsStats: {
          ...state.tpsApsStats,
          stackedTotal: payload / 10000,
        },
      };

    case types.TPS_APS_STATS_UPDATE:
      return {
        ...state,
        tpsApsStats: {
          ...state.tpsApsStats,
          totalProcessedBlocks: payload.block_num,
          maxTps: payload.max_tps,
          maxTpsBlock: payload.max_tps_block,
          liveTps: payload.live_tps,
          maxAps: payload.max_aps,
          maxApsBlock: payload.max_aps_block,
          liveAps: payload.live_aps,
        },
      };

    case types.BLOCK_CHART_UPDATE:
      return {
        ...state,
        blockChart: payload,
      };

    case types.UNREGISTERED_BPS_UPDATE:
      return {
        ...state,
        unregisteredBps: payload,
      };

    case types.CONNECTED_USERS_UPDATE:
      return {
        ...state,
        connectedUsers: payload,
      };
    default:
      return state;
  }
};
