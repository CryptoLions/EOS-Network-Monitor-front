import { createSelector } from 'reselect';

const selectModal = () => ({ modal }) => modal;

export const selectAccountInfo = () => createSelector(selectModal(), ({ accountInfo }) => accountInfo);

export const selectAccountHistory = () => createSelector(selectModal(), ({ accountHistory }) => accountHistory);

export const selectBlockInfo = () => createSelector(selectModal(), ({ blockInfo }) => blockInfo);

export const selectTxIdInfo = () => createSelector(selectModal(), ({ txInfo }) => txInfo);

export const selectP2PAddresses = () => createSelector(selectModal(), ({ p2pAddresses }) => p2pAddresses);

export const selectBpJson = () => createSelector(selectModal(), ({ bpJson }) => bpJson);

export const selectRamPrice = () => createSelector(selectModal(), ({ ramPrice }) => ramPrice);

export const selectEosApiData = () => createSelector(selectModal(), ({ eosApiData }) => eosApiData);
