export default Object.freeze({
  translations: {
    // <NavigationMenu />
    i18nNavigationMenu: {
      headLink: 'EOS Network Monitor.io',
      accountInfo: '账户信息',
      accountHistory: '账户历史',
      txInfo: '交易信息',
      blockInfo: 'Block Info',
      api: 'API',
      p2p: 'P2P',
      ramChart: 'RAM price',
      liveTpsChart: 'Live TPS',
      testnet: 'Testnet',
      nodeInstallation: '安装节点',
      legend: '说明',
    },
    // <Modal/>
    i18nModal: {
      // <AccountInfo />
      i18nAccountInfo: {
        // <Header />
        title: 'ACCOUNT INFO',
        placeholder: '帐号',
        getButton: '提取',
        getAccountsTransactionsHistory: '获取账户交易记录',
        historyLink: '历史',
        // <Main />
        balance: '余额',
        tokens: 'Tokens',
        created: '创建',
        lastCodeUpdate: '最后代码更新',
        activeKey: 'Active Key',
        ownerKey: 'Owner Key',
        ramUsed: '已使用RAM',
        bytes: '字节',
        quota: '总量',
        // 2 Blocks
        netBandwidth: 'NET带宽',
        cpuBandwidth: 'CPU带宽',
        staked: '抵押',
        delegated: '委托',
        current: '当前',
        available: '可用',
        max: '最大值',
        time: '时间',
        // Last block
        voterInfo: '投票信息',
        proxy: '代理',
        producers: '生产者',
        stakedLB: '抵押',
        lastVoteWeight: '最后投票权重',
        proxieVoteWeight: '代理投票权重',
        isProxy: '是否代理',
        deferredTrxId: '延期确认的trx id',
        lastUnstakeTime: '最后取消抵押时间',
        unstaking: '取消抵押',
      },
      // <AccountHistory />
      i18nAccountHistory: {
        // <Header />
        title: '账户历史',
        placeholder: '账户名',
        getButton: '提取',
        GetInformationAboutAccountAndBalance: '获取账户和余额的信息',
        accountInfoLink: '账户信息',
        // <Main />
        // Pagination
        prev: '上一页',
        page: '页数',
        next: '下一个',
        // Data Block
        block: '块',
        txId: 'TXid',
        date: '日期',
        action: '动作',
        from: '从',
        info: '信息',
      },
      // <Transactions />
      i18nTransactions: {
        // <Header />
        title: '交易',
        placeholder: 'TX id',
        getButton: '提取',
        findTransaction: '查询到一个交易',
        // <Main />
        block: '块',
        txId: 'TXid',
        date: '日期',
        action: '动作',
        from: '从',
        info: '信息',
      },
      // <BlockInfo />
      i18nBlockInfo: {
        title: 'BLOCK INFO',
        getButton: '提取',
      },
      // <Api />
      i18nApi: {
        title: 'API',
        getButton: '提取',
      },
      // <P2P />
      i18nP2P: {
        title: 'P2P',
      },
      // <Legend />
      i18nLegend: {
        title: '说明',
        // About block
        about: '关于',
        content: [
          '所有信息都来自公共节点，出块节点通常是隐藏的',
          'EOS网络监视器是一个检查EOS公共节点并显示常规信息的工具',
          '显示所有已注册的生产者，从节点的bp.json文件提取信息',
        ],
        tps: ['TPS', '每秒交易量'],
        aps: ['APS', '每秒动作数'],
        // Colors legend block
        colorsLegend: '颜色说明',
        producingRightNow: '正在生产',
        halfOrMore: 'Half or more public endpoints do not respond',
        versionInformation: `版本信息是从公共节点查询获得的。出块节点通常是隐藏的。“不显示版本”的公共节点可能有合理的理由，比如回避已知的漏洞，但这些都很少见。`,
        unsynced: '未同步',
        thisDoesNot: `这并不一定意味着有分叉或者不同。它可能是节点重新同步，很快就会同步完成`,
        bps: `以灰色标记的节点有出错，或丢失bp.json文件。我们会做一个周期检查。但是我们只检查前60名`,
        moreinfo: '更多信息',
        // Ping color explanation block
        pingColorExplanation: 'PING 颜色说明',
        greyName: '灰色 ',
        greyPing: 'Ping灰色: 已获得最新状态',
        blackPing: 'Ping黑色: 重新查询状态',
        // Notes
        note1: '注释 1',
        ManyBp: `许多节点使用负载均衡，因此返回的信息可能不同。`,
        note2: '注释2',
        wePull: '我们每隔几秒就用“cleos system list procedures” 更新出块节点列表。',
      },
      // <Vote />
      i18nVote: {
        title: 'VOTE',
        // Main Text
        byCompletingThisAction: '同意',
        eosConstitution: 'EOS宪法',
        theIntentOf: `“投票出块者”功能是为了对超过30个节点候选人，投出有效的选票。`,
        iAmEitherThe: `我是投票代币的实际拥有人，或者我有证据证明我已被授权代表受益所有人投票。`,
        iStipulateThat: `我承诺，我没有，也不会接受任何有价值的东西来换取这些选票，否则将受到没收代币或其他的惩罚。`,
        iStipulateThatIAmNot: `我承诺，我不会使用任何自动投票、重复投票或刷票的系统。这样做违反了这份合同。.`,
        thisFeatureWas: `这个功能是为了帮助投票而创建的。它创建一个可信的出块节点的cleos命令
        使用`,
        ourCleosWrapper: ' 我们的cleos 接口（只配置端口和地址）， ',
        selectedProducers: '选中的生产商',
        // Input
        placeholder: '你的账户名...',
        // Button
        installScatter: '安装Scatter',
        vote: '投票',
        initScatter: '初始化Scatter',
        // Footer
        voteProducerProds: './cleos.sh system voteproducer prods',
        checkAtLeastOne: '选中至少一个生产商(选择框)',
      },
      // <BpJson />
      i18nBpJson: {
        title: 'bp.json',
      },
      // <ErrorMessage />
      i18nErrorMessage: {
        title: 'Error message',
      },
      // <RamPrice />
      i18nRamPrice: {
        title: 'EOS RAM price',
      },
      // <LiveTps />
      i18nLiveTps: {
        title: 'Live TPS',
      },
    },
    // <FirstSection />
    i18nFirstSection: {
      // <CurrentBlockInfo />
      i18nCurrentBlockInfo: {
        title: '当前区块信息',
        irreversibleBlock: '已确认区块',
        producedBy: '出块者是',
        next: '下一步',
      },
      // <GeneralInfo />
      i18nGeneralInfo: {
        title: '常规信息',
        stakedTotal: '抵押总数',
        activatedStake: '可使用抵押数',
        tps: 'TPS 当前/全部',
        aps: 'APS 当前/全部',
        connectedUsers: '已连接用户数',
        ramUsed: 'RAM used / in chain',
        totalUnpaidBlocks: '无偿块',
        eosioRamFee: 'Eosio ram fee',
        eosioSaving: 'Eosio saving',
      },
      // <Transactions />
      i18nTransactions: {
        title: '交易',
        total: '全部',
        transactions: '交易',
        blockNumber: 'Synced up to block #',
        transactionsWillAppear: '同步后显示交易信息',
      },
    },
    // <SecondSection />
    i18nSecondSection: {
      i18nVote: '投票',
      // <TableColumnMenu /> && <TableHeading />
      i18nFixedTableColumnNames: {
        name: '名字',
      },
      i18nTableColumnNames: {
        ping: '从欧洲发起的Ping',
        answered: '有回应',
        blkSeen: 'Blk 可见',
        produced: '生成',
        blkProduced: 'Blk 生成',
        version: '版本',
        address: '地址',
        http: 'HTTP',
        p2p: 'P2P',
        location: '位置',
        numberProduced: '# produced',
        txs: '# TXs',
        organisation: '组织名称',
        votes: '票',
        expectedIncome: '预期收入',
        actualIncome: 'Actual income',
        missedBlocksAll: 'Missed blocks (all time)',
        missedBlocksRound: 'Missed blocks (last round)',
        missedBlocksDay: 'Missed blocks (last 24 hours)',
        voteRewards: 'Vote rewards',
        blockRewards: 'Block rewards',
        totalUnpaidRewards: 'Total unpaid rewards',
        publicEndpoints: 'Public endpoints',
        blackListHash: 'Blacklist Hash',
      },
      // <TableColumnMenu />
      i18nTableColumnMenu: {
        title: '列',
        hintText: ['Hint', 'Shift + scroll', '水平滚动表格'],
        reset: '重置',
      },
    },
    // <Footer />
    footer: {
      createdBy: '制作者',
      cryptoLions: 'CryptoLions.io',
      gitHub: 'GitHub',
      map: '地图',
      table: '桌面',
    },
  },
});
