import { createSelector } from 'reselect';

const selectProducersData = () => ({ producers }) => producers;

export const selectProducers = () => createSelector(selectProducersData(), ({ producers }) => producers);

export const selectLastHash = () => createSelector(selectProducersData(), ({ blackList }) => blackList.lastHash);

export const selectCheckedProducers = () =>
  createSelector(selectProducersData(), ({ selectedProducers }) => selectedProducers);

// Filter input value
export const selectFilterInputValue = () =>
  createSelector(selectProducersData(), ({ filterInputValue }) => filterInputValue);
