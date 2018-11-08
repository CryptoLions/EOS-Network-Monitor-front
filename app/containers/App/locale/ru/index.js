export default Object.freeze({
  translations: {
    // <NavigationMenu />
    i18nNavigationMenu: {
      headLink: 'EOS Network Monitor.io',
      accountInfo: 'Информация об Аккаунте',
      accountHistory: 'История Аккаунта',
      txInfo: 'Инфо О Транзакциях',
      blockInfo: 'БЛОК ИНФО',
      api: 'API',
      p2p: 'P2P',
      ramChart: 'RAM price',
      liveTpsChart: 'Live TPS',
      testnet: 'Тестовая Сеть',
      nodeInstallation: 'Установка Ноды',
      legend: 'Условные Обозначения',
    },
    // <Modal/>
    i18nModal: {
      // <AccountInfo />
      i18nAccountInfo: {
        // <Header />
        title: 'ИНФОРМАЦИЯ ПО АККАУНТУ',
        placeholder: 'Имя Аккаунта',
        getButton: 'Получить',
        getAccountsTransactionsHistory: 'Получить историю транзакций аккаунтов',
        historyLink: 'История',
        // <Main />
        balance: 'Баланс',
        tokens: 'Токены',
        created: 'Создан',
        lastCodeUpdate: 'Последнее обновление кода',
        activeKey: 'Active Key',
        ownerKey: 'Owner Key',
        ramUsed: 'RAM использовано',
        bytes: 'байт',
        quota: 'всего',
        // 2 Blocks
        netBandwidth: 'Пропускная Способность Сети',
        cpuBandwidth: 'Пропускная Способность ЦП',
        staked: 'застейкано',
        delegated: 'делигировано',
        current: 'текущий',
        available: 'доступно',
        max: 'максимально',
        time: 'время',
        // Last block
        voterInfo: 'Voter Info',
        proxy: 'Прокси',
        producers: 'Продюсеры',
        stakedLB: 'Застейкано',
        lastVoteWeight: 'Объем Последнего Голосования',
        proxieVoteWeight: 'Объем Прокси Голосования',
        isProxy: 'Прокси',
        deferredTrxId: 'Отложенные trx id',
        lastUnstakeTime: 'Время последнего отстейкивания',
        unstaking: 'разстейкать',
      },
      // <AccountHistory />
      i18nAccountHistory: {
        // <Header />
        title: 'ИСТОРИЯ АККАУНТА',
        placeholder: 'Имя Аккаунта',
        getButton: 'Получить',
        GetInformationAboutAccountAndBalance: 'Получить информацию об аккаунте и балансе',
        accountInfoLink: 'Информация об аккаунте',
        // <Main />
        // Pagination
        prev: 'Назад',
        page: 'Страница',
        next: 'Далее',
        // Data Block
        block: 'Блок',
        txId: 'TXid',
        date: 'Дата',
        action: 'Действие',
        from: 'От',
        info: 'Инфо',
      },
      // <Transactions />
      i18nTransactions: {
        // <Header />
        title: 'ТРАНЗАКЦИЯ',
        placeholder: 'TX id',
        getButton: 'Получить',
        findTransaction: 'Найти Транзакцию',
        // <Main />
        block: 'Блок',
        txId: 'TXid',
        date: 'Дата',
        action: 'Действие',
        from: 'От',
        info: 'Инфо',
      },
      // <BlockInfo />
      i18nBlockInfo: {
        title: 'БЛОК ИНФО',
        getButton: 'Получить',
      },
      // <Api />
      i18nApi: {
        title: 'API',
        getButton: 'Получить',
      },
      // <P2P />
      i18nP2P: {
        title: 'P2P',
      },
      // <Legend />
      i18nLegend: {
        title: 'УСЛОВНЫЕ ОБОЗНАЧЕНИЯ',
        // About block
        about: 'ИНФОРМАЦИЯ',
        content: [
          'Вся информация приходит от опрашиваемых ПУБЛИЧНЫХ нод. Блок Продюсерские ноды, как правило, скрыты',
          'EOSNetworkMonitor.io это инструмент для проверки EOS публичных конечных точек и мониторинга общей информации',
          'Отображаются все зарегистрированные продюсеры и извлекает инфо о конечных точках из bp.json file',
        ],
        tps: ['TPS', 'Транзакций в секунду'],
        aps: ['APS', 'Действий в транзакциях в секунду'],
        // Colors legend block
        colorsLegend: 'Цвет Обозначений',
        producingRightNow: 'Cейчас продюсирует',
        halfOrMore: 'Половина или более публ. конечных точек не отвечают',
        zeroOfpublic: '0 рабочих публ. конечных точек',
        notProducing: 'Не производит блоки',
        versionInformation: `Информация о версии получается от запросов от публичных нод. Ноды продюсирующие блоки, как правило, скрыты. Могут быть законные основания для "официальных версий" публичных нод, такие как обход известных багов, но это редкость`,
        unsynced: 'Не синхронизирован',
        thisDoesNot: `Это НЕ означает форк или разницу в консенсусе. Может быть, что узел ресинхронизировался и в ближайшее время снова синхронизируется`,
        bps: `БП отмечены серым если неверный или отсутствует bp.json файл. Мы делаем периодическую проверку. Также, мы проверяем только топ 60.`,
        moreinfo: 'Подробнее',
        // Ping color explanation block
        pingColorExplanation: 'PING ОБЯСНЕНИЕ ЦВЕТОВЫХ ОБОЗНАЧЕНИЙ',
        greyName: 'Серый ',
        greyPing: 'Серый результат пинга: последний статус получен',
        blackPing: 'Черный результат пинга: статус пересчитывается',
        // Notes
        note1: 'Примечание 1',
        ManyBp: `Многие БП с большим количеством нод, используют балансировщик нагрузки. По этой причине, даже последующие запросы иногда выдают различную информацию`,
        note2: 'Примечание 2',
        wePull: 'Мы загружаем список нод продюсеров из `cleos system list producers`, каждые несколько секунд',
      },
      // <Vote />
      i18nVote: {
        title: 'ГОЛОСОВАТЬ',
        // Main Text
        byCompletingThisAction: 'Выполняя это действие, я согласен с',
        eosConstitution: 'Конституцией EOS',
        theIntentOf: `Намерение действия 'vote producer'  отдает действительный голос до 30 кандидатов в БП.`,
        iAmEitherThe: `Я либо являюсь бенефициарным владельцем токенов которыми я голосую, либо у меня есть доказательство, что я был уполномочен голосовать от имени бенефициарного собственника(ов).`,
        iStipulateThat: `Я подтверждаю, что я не принимал и не буду принимать что-либо ценное, в обмен на эти голоса, под страхом конфискации этих токенов и других штрафных санкций.`,
        iStipulateThatIAmNot: `Я подтверждаю, что не использую системы автоматического голосования, повторного голосования или обновленного голосования. Такие действия, нарушают данный контракт.`,
        thisFeatureWas: `Эта функция была создана, чтобы помочь с голосованием. Она создает cleos команду основанную на проверенных продюсерах и
        использует`,
        ourCleosWrapper: 'наш cleos wrapper (который просто настраивает порты и адреса)',
        selectedProducers: 'Выбранные продюсеры',
        // Input
        placeholder: 'Имя вашего аккаунта...',
        // Button
        installScatter: 'Установить Scatter',
        vote: 'Голосовать',
        initScatter: 'Инициализация Scatter',
        // Footer
        voteProducerProds: './cleos.sh system voteproducer prods',
        checkAtLeastOne: 'Выберите по крайней мере, одного продюсера (галочка)',
      },
      // <BpJson />
      i18nBpJson: {
        title: 'bp.json',
      },
      // <ErrorMessage />
      i18nErrorMessage: {
        title: 'Сообщение об ошибке',
      },
      // <RamPrice />
      i18nRamPrice: {
        title: 'Цена EOS RAM',
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
        title: 'Информация о текущем блоке',
        irreversibleBlock: 'Необратимые Блоки',
        producedBy: 'Производит',
        next: 'Далее',
      },
      // <GeneralInfo />
      i18nGeneralInfo: {
        title: 'Общая информация',
        stakedTotal: 'Застейкано в общем',
        activatedStake: 'Activated stake',
        tps: 'TPS Текущие/Рекорд',
        aps: 'APS Текущие/Рекорд',
        connectedUsers: 'Подключенных Пользователей',
        ramUsed: 'используемая RAM / в чейне',
        totalUnpaidBlocks: 'Неоплаченных блоков',
        eosioRamFee: 'Eosio ram fee',
        eosioSaving: 'Eosio saving',
      },
      // <Transactions />
      i18nTransactions: {
        title: 'Транзакции',
        total: 'В общем',
        transactions: 'транзакций',
        blockNumber: 'Блок #',
        transactionsWillAppear: 'Транзакции появятся после синхронизации...',
      },
    },
    // <SecondSection />
    i18nSecondSection: {
      i18nVote: 'ГОЛОСОВАТЬ',
      // <TableColumnMenu /> && <TableHeading />
      i18nFixedTableColumnNames: {
        name: 'Имя',
      },
      i18nTableColumnNames: {
        ping: 'Ping из Европы',
        answered: 'Ответил',
        blkSeen: 'Блок ответил',
        produced: 'Производит',
        blkProduced: 'Блок продюсил',
        version: 'Версия',
        address: 'Адрес',
        http: 'HTTP',
        p2p: 'P2P',
        location: 'Местоположение',
        numberProduced: '# спродюсировал',
        txs: '# TXs',
        organisation: 'Название организации',
        votes: 'Голосов',
        expectedIncome: 'Ожидаемый доход',
        actualIncome: 'Actual income',
        missedBlocksAll: 'Пропущенных блоков (за все время)',
        missedBlocksRound: 'Пропущенных блоков (последний раунд)',
        missedBlocksDay: 'Пропущенных блоков (за последние 24 ч.)',
        voteRewards: 'Награда за голосование',
        blockRewards: 'Награда за блоки',
        totalUnpaidRewards: 'Всего неоплаченных вознаграждений',
        publicEndpoints: 'Публичные конечные точки',
        blackListHash: 'Хэш блэклиста',
      },
      // <TableColumnMenu />
      i18nTableColumnMenu: {
        title: 'Колонки',
        hintText: ['Hint', 'Shift + scroll', 'для прокрутки таблицы по горизонтали'],
        reset: 'Сброс',
      },
    },
    // <Footer />
    footer: {
      createdBy: 'Созданно',
      cryptoLions: 'CryptoLions.io',
      gitHub: 'GitHub',
      map: 'Карта',
      table: 'Table',
    },
  },
});
