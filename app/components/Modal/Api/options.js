const options = [
  { value: 'getInfo', label: "'/v1/chain/get_info'" },
  { value: 'getBlock', label: "'/v1/chain/get_block'" },
  { value: 'getBlockHeaderState', label: "'/v1/chain/get_block_header_state'" },
  { value: 'getAccount', label: "'/v1/chain/get_account'" },
  { value: 'getAbi', label: "'/v1/chain/get_abi'" },
  { value: 'getRawCodeAndAbi', label: "'/v1/chain/get_raw_code_and_abi'" },
  { value: 'getTableRows', label: "'/v1/chain/get_table_rows'" },
  { value: 'getCurrencyBalance', label: "'/v1/chain/get_currency_balance'" },
  { value: 'getCurrencyStats', label: "'/v1/chain/get_currency_stats'" },
  { value: 'getProducers', label: "'/v1/chain/get_producers'" },
];

export default options;
