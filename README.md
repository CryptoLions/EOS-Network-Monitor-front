# How to install and Use

```
cd eos-network-monitor/netmon-frontend
yarn
export API_URL=https://api.eosnetworkmonitor.io
```

### Development

```
yarn start
```

### Production

```
yarn build
yarn start:prod
```

Visit http://localhost:3000 in your browser

### Release notes

v2.0-d2018.11.26
  - Main Table
    - Actual income
    - Expected income
    - Missed Blocks (all time) (last round) (last 24 hours)
    - Vote rewards
    - Block rewards
    - Public endpoints
    - Ping From Europe, Answered colors 
    - Rows colors
    - Blacklist Hash

  - General info
    - Ram used / in chain (Gb) 
    - eosio Ram fee, eosio Saving
    - New TPS/APS calculation

  - Top menu
    - New API (JSON object under API)
    - P2P list
    - Ram price chart
    - Live TPS

  - Other 
    - Move to SSL
    - Updated Readme
    - Producers table update (socket) - speed up
    - Tokens balance for Account info
    - New logo
    - Change language on Top
    - updated Legend
    - logos for all BPs
    - Location flags
    - Left table of unreg BPs for last 24 hours (table appear only if > 1BP)
