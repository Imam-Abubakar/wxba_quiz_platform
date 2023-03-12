const questions = [
  {
    questionText: 'What is a decentralized network?',
    answerOptions: [
      { answerText: 'A network that is controlled by a central authority', isCorrect: false },
      { answerText: 'A network that is controlled by multiple authorities ', isCorrect: false },
      { answerText: 'A network that is controlled by a single user', isCorrect: false },
      { answerText: 'A network that is not controlled by any central authority', isCorrect: true },
    ],
  },
  {
    questionText: 'What is the promise of web3?',
    answerOptions: [
      { answerText: 'To provide a more secure and private internet', isCorrect: true },
      { answerText: `To provide a more centralized internet`, isCorrect: false },
      { answerText: `To provide a faster internet connection`, isCorrect: false },
      { answerText: `To provide a cheaper internet connection`, isCorrect: false },
    ],
  },
  {
    questionText: '. What is blockchain?',
    answerOptions: [
      { answerText: 'A type of cryptocurrency', isCorrect: false },
      { answerText: 'A type of decentralized network', isCorrect: false },
      { answerText: 'A type of centralized network', isCorrect: false },
      { answerText: 'A type of database', isCorrect: true },
    ],
  },
  {
    questionText: 'How does blockchain work?',
    answerOptions: [
      { answerText: 'By using a central authority to verify transactions', isCorrect: false },
      { answerText: `By using multiple authorities to verify transactions`, isCorrect: false },
      { answerText: `By using a peer-to-peer network to verify transactions`, isCorrect: true },
      { answerText: `By using a decentralized network to verify transactions`, isCorrect: false },
    ],
  },
  {
    questionText: `What are the five layers of blockchain?`,
    answerOptions: [
      { answerText: 'Protocol, Network, Application, Data, Consensus', isCorrect: false },
      { answerText: `Protocol, Data, Network, Consensus, Application`, isCorrect: true },
      { answerText: `Network, Protocol, Consensus, Data, Application`, isCorrect: false },
      { answerText: `Consensus, Data, Application, Protocol, Network`, isCorrect: false },
    ],
  },
  {
    questionText: `What are blockchain nodes?`,
    answerOptions: [
      { answerText: 'The physical location of a blockchain', isCorrect: false },
      { answerText: 'The users that participate in the blockchain network', isCorrect: false },
      { answerText: 'The servers that host the blockchain network', isCorrect: false },
      { answerText: 'The software that runs the blockchain network', isCorrect: true },
    ],
  },
  {
    questionText: `What is the difference between a public and private blockchain?`,
    answerOptions: [
      { answerText: 'Public blockchains are more secure than private blockchains', isCorrect: false },
      { answerText: 'Public blockchains are open to anyone, while private blockchains are only accessible to specific users or groups', isCorrect: true },
      { answerText: 'Private blockchains are more transparent than public blockchains', isCorrect: false },
      { answerText: 'Private blockchains are more decentralized than public blockchains', isCorrect: false },
    ],
  },
  {
    questionText: `What is the scalability trilemma?`,
    answerOptions: [
      { answerText: 'The trade-off between security, decentralization, and speed in blockchain networks', isCorrect: true },
      { answerText: 'The trade-off between data storage, network bandwidth, and user activity in blockchain networks', isCorrect: false },
      { answerText: 'The trade-off between data privacy, user identity, and network latency in blockchain networks', isCorrect: false },
      { answerText: 'The trade-off between transaction fees, network security, and user accessibility in blockchain networks', isCorrect: false },
    ],
  },
  {
    questionText: ` Which of the following is NOT a layer of the blockchain?`,
    answerOptions: [
      { answerText: 'Consensus', isCorrect: false },
      { answerText: 'Data', isCorrect: false },
      { answerText: 'Application', isCorrect: false },
      { answerText: 'Node', isCorrect: true },
    ],
  },
  {
    questionText: `Which of the following is a benefit of using blockchain technology?`,
    answerOptions: [
      { answerText: 'Increased centralization', isCorrect: false },
      { answerText: ' Decreased security', isCorrect: false },
      { answerText: 'Increased transparency', isCorrect: true },
      { answerText: 'Decreased efficiency', isCorrect: false },
    ],
  },
  {
    questionText: `Which consensus mechanism is used by the Ethereum blockchain?`,
    answerOptions: [
      { answerText: 'Proof of Work', isCorrect: false },
      { answerText: 'Proof of Authority', isCorrect: false },
      { answerText: 'Proof of Stake', isCorrect: true },
      { answerText: 'Delegated Proof of Stake', isCorrect: false },
    ],
  },
  {
    questionText: `What is a smart contract?`,
    answerOptions: [
      { answerText: 'A legal contract that is stored on the blockchain', isCorrect: false },
      { answerText: 'An executable program that is stored on the blockchain', isCorrect: true },
      { answerText: 'A type of cryptocurrency wallet', isCorrect: false },
      { answerText: 'A type of decentralized database', isCorrect: false },
    ]
  },
  {
    questionText: ` What is a DAO?`,
    answerOptions: [
      { answerText: 'A type of cryptocurrency', isCorrect: false },
      { answerText: 'A type of decentralized autonomous organization', isCorrect: true },
      { answerText: 'A type of smart contract', isCorrect: false },
      { answerText: 'A type of decentralized network', isCorrect: false },
    ]
  },
  {
    questionText: `What is a non-fungible token (NFT)?`,
    answerOptions: [
      { answerText: ' A type of cryptocurrency that is not divisible', isCorrect: false },
      { answerText: ' A type of smart contract that is not transferable', isCorrect: false },
      { answerText: 'A type of digital asset that is unique and not interchangeable', isCorrect: true },
      { answerText: ' A type of decentralized database that is immutable', isCorrect: false },
    ]
  },
  {
    questionText: `What is the difference between a hard fork and a soft fork?`,
    answerOptions: [
      { answerText: 'A hard fork is a major change to the blockchain protocol, while a soft fork is a minor change', isCorrect: true },
      { answerText: 'A hard fork is a minor change to the blockchain protocol, while a soft fork is a major change', isCorrect: false },
      { answerText: 'A hard fork is a change that is backward compatible, while a soft fork is a change that is not backward compatible', isCorrect: false },
      { answerText: ' A hard fork is a change that is not backward compatible, while a soft fork is a change that is backward compatible', isCorrect: false },
    ]
  },
  {
    questionText: `What is a zero-knowledge proof?`,
    answerOptions: [
      { answerText: 'A type of cryptographic algorithm', isCorrect: false },
      { answerText: ' A type of smart contract', isCorrect: false },
      { answerText: 'A type of consensus mechanism', isCorrect: false },
      { answerText: 'A method of proving the authenticity of a transaction without revealing any information about it', isCorrect: true },
    ]
  },
  {
    questionText: `Which of the following is NOT a disadvantage of using blockchain technology?`,
    answerOptions: [
      { answerText: 'Limited scalability', isCorrect: false },
      { answerText: 'High energy consumption', isCorrect: false },
      { answerText: 'Limited privacy', isCorrect: false },
      { answerText: 'High transaction fees', isCorrect: false },
    ]
  },
  {
    questionText: `What is the purpose of a Merkle tree in a blockchain?`,
    answerOptions: [
      { answerText: 'To reduce the size of the blockchain', isCorrect: false },
      { answerText: 'To increase the speed of transactions', isCorrect: false },
      { answerText: 'To increase the security of the blockchain', isCorrect: true },
      { answerText: 'To reduce the complexity of the blockchain', isCorrect: false },
    ]
  },
  {
    questionText: `Which of the following is a benefit of using a private blockchain?`,
    answerOptions: [
      { answerText: 'Increased transparency', isCorrect: false },
      { answerText: 'Lower transaction fees', isCorrect: false },
      { answerText: 'More efficient consensus mechanism', isCorrect: false },
      { answerText: 'Greater control over who can participate in the network', isCorrect: true },
    ]
  },
  {
    questionText: `What is a sidechain?`,
    answerOptions: [
      { answerText: 'A separate blockchain that is connected to the main blockchain', isCorrect: true },
      { answerText: 'A type of consensus mechanism', isCorrect: false },
      { answerText: 'A type of smart contract', isCorrect: false },
      { answerText: 'A type of data structure used in blockchain technology', isCorrect: false },
    ]
  },
  {
    questionText: `What is a cryptocurrency wallet?`,
    answerOptions: [
      { answerText: 'A physical wallet that holds cryptocurrencies', isCorrect: false },
      { answerText: 'A software program that stores public and private keys', isCorrect: true },
      { answerText: 'A type of blockchain node', isCorrect: false },
      { answerText: 'A smart contract that enables cryptocurrency transactions', isCorrect: false },
    ]
  },
  {
    questionText: `What is a gas fee in Ethereum?`,
    answerOptions: [
      { answerText: 'The amount of Ethereum required to execute a smart contract', isCorrect: true},
      { answerText: 'The amount of computing power required to execute a smart contract', isCorrect: false },
      { answerText: 'The amount of Ether required to mine a block', isCorrect: false },
      { answerText: 'The amount of Ether required to validate a transaction', isCorrect: false },
    ]
  },
  {
    questionText: `What is a 51% attack in blockchain?`,
    answerOptions: [
      { answerText: 'When a majority of nodes in the network collude to manipulate the blockchain', isCorrect: false },
      { answerText: `When a miner has more than 51% of the network's computing power and can manipulate transactions`, isCorrect: true },
      { answerText: 'When a smart contract executes with a 51% probability of failure', isCorrect: false },
      { answerText: `When a user controls more than 51% of the network's cryptocurrency supply and can manipulate transactions`, isCorrect: false },
    ]

  },
  {
    questionText: `What is a soft fork in blockchain?`,
    answerOptions: [
      { answerText: 'A temporary network outage', isCorrect: false },
      { answerText: 'A change to the blockchain protocol that is backward compatible', isCorrect: true },
      { answerText: 'A change to the blockchain protocol that is not backward compatible', isCorrect: false },
      { answerText: 'A type of consensus mechanism', isCorrect: false },
    ]
  },
  {
    questionText: `What is a private key in cryptocurrency?`,
    answerOptions: [
      { answerText: 'A secret code that is used to decrypt a message', isCorrect: false },
      { answerText: 'A secret code that is used to encrypt a message', isCorrect: false },
      { answerText: 'A secret code that is used to sign a transaction', isCorrect: true },
      { answerText: 'A secret code that is used to verify a transaction', isCorrect: false },
    ]
  },
  {
    questionText: `What is a DAO hack?`,
    answerOptions: [
      { answerText: 'When a smart contract is manipulated to transfer funds to an unauthorized user', isCorrect: true },
      { answerText: 'When a smart contract executes with a 50% probability of failure', isCorrect: false },
      { answerText: 'When a user loses their private key and cannot access their cryptocurrency wallet', isCorrect: false },
      { answerText: 'When a miner manipulates a block to include their own transactions', isCorrect: false },
    ]
  },
  {
    questionText: `What is a consensus mechanism in blockchain?`,
    answerOptions: [
      { answerText: 'A method of reaching agreement on the state of the blockchain', isCorrect: true },
      { answerText: 'A method of encrypting transactions on the blockchain', isCorrect: false },
      { answerText: 'A method of verifying transactions on the blockchain', isCorrect: false },
      { answerText: 'A method of adding new blocks to the blockchain', isCorrect: false },
    ]
  },
  {
    questionText: `What is a hard cap in cryptocurrency?`,
    answerOptions: [
      { answerText: 'The maximum amount of cryptocurrency that will ever be produced', isCorrect: true },
      { answerText: 'The maximum amount of cryptocurrency that can be mined in a given period of time', isCorrect: false },
      { answerText: 'The maximum amount of cryptocurrency that can be purchased by an individual user', isCorrect: false },
      { answerText: 'The maximum amount of cryptocurrency that can be transferred in a single transaction', isCorrect: false },
    ]
  },
  {
    questionText: `What is the difference between a token and a coin in cryptocurrency?`,
    answerOptions: [
      { answerText: 'A token is a type of cryptocurrency that is used for payments, while a coin is a type of cryptocurrency that is used for governance', isCorrect: false },
      { answerText: 'A token is a type of cryptocurrency that is built on top of another blockchain, while a coin has its own blockchain', isCorrect: true },
      { answerText: 'A token is a type of cryptocurrency that is used for fundraising, while a coin is a type of cryptocurrency that is used for transactions', isCorrect: false },
      { answerText: 'A token is a type of cryptocurrency that is backed by a physical asset, while a coin is not backed by any physical asset', isCorrect: false },
    ]
  },
  {
    questionText: `What is a hard wallet in cryptocurrency?`,
    answerOptions: [
      { answerText: 'A physical device that stores cryptocurrency private keys offline', isCorrect: true },
      { answerText: 'A physical device that stores cryptocurrency public keys offline', isCorrect: false },
      { answerText: 'A software program that stores cryptocurrency private keys online', isCorrect: false },
      { answerText: 'A software program that stores cryptocurrency public keys online', isCorrect: false },
    ]
  }
];

/*
const questions = [
  {
    questionText: 'What is a crowdsourced pool of cryptocurrencies or tokens locked in a smart contract that is used to facilitate trades between the assets on a decentralized exchange?',
    answerOptions: [
      { answerText: 'Spillage', isCorrect: false },
      { answerText: 'Liquidity Pool ', isCorrect: true },
      { answerText: 'Yield Farming', isCorrect: false },
      { answerText: 'Automated Market Maker', isCorrect: false },
    ],
  },
  {
    questionText: 'What is Tokenomics?',
    answerOptions: [
      { answerText: 'Token economy of a project', isCorrect: true },
      { answerText: `The information of a token’s utility`, isCorrect: false },
      { answerText: `The view of a token’s dominance`, isCorrect: false },
    ],
  },
  {
    questionText: 'What are inflationary tokens?',
    answerOptions: [
      { answerText: 'Tokens that increases their supply', isCorrect: true },
      { answerText: 'Tokens that decrease their supply', isCorrect: false },
      { answerText: 'Tokens that gets affected by deflation', isCorrect: false },
      { answerText: 'Tokens that are affected by economy', isCorrect: false },
    ],
  },
  {
    questionText: 'As a Defi enthusiast, which app is important for you as a content writer ?',
    answerOptions: [
      { answerText: 'Twitter , Telegram, Discord', isCorrect: false },
      { answerText: `Discord, Linkedln, Twitter`, isCorrect: false },
      { answerText: `Twitter , Linkedln, Medium`, isCorrect: true },
      { answerText: `Binance , Trustwallet, Metamask`, isCorrect: false },
    ],
  },
  {
    questionText: `What isn’t a reg flag among these ?`,
    answerOptions: [
      { answerText: 'Inactiveness of community', isCorrect: false },
      { answerText: `A doxxed team`, isCorrect: true },
      { answerText: `FUD`, isCorrect: false },
      { answerText: `No VC`, isCorrect: false },
    ],
  },
  {
    questionText: `What does it mean to exist liquidity?`,
    answerOptions: [
      { answerText: 'Investing in honey pot', isCorrect: false },
      { answerText: 'Having a project dump on you', isCorrect: false },
      { answerText: 'Having a project pump on you', isCorrect: false },
      { answerText: 'Buying and taking profit in a rug project', isCorrect: true },
    ],
  },
  {
    questionText: `What is liquidity?`,
    answerOptions: [
      { answerText: 'The project marketcap', isCorrect: false },
      { answerText: 'The fuel enabling the flow of money between digital assets', isCorrect: true },
      { answerText: 'The projects fund', isCorrect: false },
    ],
  },
  {
    questionText: `What effect does 'Weak community' and 'High percentage of holding by the developer' have on a project?`,
    answerOptions: [
      { answerText: 'Rugpull', isCorrect: true },
      { answerText: 'FUD', isCorrect: false },
      { answerText: 'appreciation in the token’s value', isCorrect: false },
      { answerText: ' depreciation in the token’s value', isCorrect: false },
    ],
  },
  {
    questionText: `Which of this isn’t a defi wallet?`,
    answerOptions: [
      { answerText: 'Paypal', isCorrect: true },
      { answerText: 'Metamask', isCorrect: false },
      { answerText: 'Binance', isCorrect: false },
      { answerText: 'Trust Wallet', isCorrect: false },
    ],
  },
  {
    questionText: `Who is the founder of Bitcoin?`,
    answerOptions: [
      { answerText: ' CZ', isCorrect: false },
      { answerText: 'Vitalik Buterin', isCorrect: false },
      { answerText: 'Satoshi Nakamoto', isCorrect: true },
    ],
  },
  {
    questionText: ` What is the meaning of Crypto?`,
    answerOptions: [
      { answerText: 'Ethereum', isCorrect: false },
      { answerText: 'Digital', isCorrect: false },
      { answerText: 'Concealed', isCorrect: true },
    ],
  },
  {
    questionText: `What do one use to swap on Trust Wallet?`,
    answerOptions: [
      { answerText: 'Pancakeswap', isCorrect: true },
      { answerText: 'Dapps', isCorrect: false },
      { answerText: 'Binance', isCorrect: false },
    ]
  },
  {
    questionText: `Which isn’t a Defi features?`,
    answerOptions: [
      { answerText: 'Liquidity farming', isCorrect: false },
      { answerText: 'Staking', isCorrect: false },
      { answerText: 'Centralized Exchange', isCorrect: true },
      { answerText: 'Automated Market Maker', isCorrect: false },
    ]
  },
  {
    questionText: `The airdrop which workxie billionaire did for its genesis holders is?`,
    answerOptions: [
      { answerText: 'Standard airdrop', isCorrect: false },
      { answerText: 'Holders airdrop', isCorrect: true },
      { answerText: 'Raffle airdrop', isCorrect: false },
      { answerText: 'Bounty airdrop', isCorrect: false },
    ]
  },
  {
    questionText: `What is the meaning of DYOR?`,
    answerOptions: [
      { answerText: ' do your research', isCorrect: false },
      { answerText: 'do your own research', isCorrect: true },
      { answerText: 'doxxed team', isCorrect: false },
    ]
  },
  {
    questionText: `When was Bitcoin invented?`,
    answerOptions: [
      { answerText: ' 2008', isCorrect: false },
      { answerText: '2009', isCorrect: true },
      { answerText: '1999', isCorrect: false },
      { answerText: ' 2010', isCorrect: false },
    ]
  },
  {
    questionText: `The following are forms of crypto except`,
    answerOptions: [
      { answerText: 'Altcoins', isCorrect: false },
      { answerText: 'Standard coins', isCorrect: false },
      { answerText: 'Bitcoin and Defi', isCorrect: true },
    ]
  },
  {
    questionText: `Which isn’t a popular cryptocurrency?`,
    answerOptions: [
      { answerText: 'Litecoin', isCorrect: false },
      { answerText: 'Bitcoin', isCorrect: false },
      { answerText: 'Ethereum', isCorrect: false },
      { answerText: 'Shiba inu', isCorrect: true },
    ]
  },
  {
    questionText: `When cryptocurrency is in profit what does it mean?`,
    answerOptions: [
      { answerText: 'Bearish season', isCorrect: false },
      { answerText: 'Bullish season', isCorrect: true },
      { answerText: 'All time high', isCorrect: false },
      { answerText: 'All time low', isCorrect: false },
    ]
  },
  {
    questionText: `What are the types of crypto wallets?`,
    answerOptions: [
      { answerText: 'Cold wallet , Warm wallet', isCorrect: false },
      { answerText: 'Cold wallet , Hot wallet', isCorrect: true },
      { answerText: 'Trust Wallet , Metamask', isCorrect: false },
    ]
  },


];
*/
/*
  const questions = [
    {
      questionText: 'How will Web 3.0 profiles affect the browsing experience for users?',
      answerOptions: [
        { answerText: 'No two people will have the same browsing experience', isCorrect: true },
        { answerText: 'It would not affect the experience at all -- everything happens on the back end', isCorrect: false },
        { answerText: 'Niche Web sites will lose traffic and will eventually fade away, leaving only a few monopolies on the Web', isCorrect: false },
      ],
    },
    {
      questionText: 'If the Web 1.0 experience is like going to a library and the Web 2.0 experience is like talking with a group of friends, what will the Web 3.0 experience be like?',
      answerOptions: [
        { answerText: 'having a personal assistant', isCorrect: false },
        { answerText: 'going to class in a university lecture hall', isCorrect: false },
        { answerText: 'going to a movie theater with every film and television show available to watch any time you like', isCorrect: true },
      ],
    },
    {
      questionText: 'The early internet that only allows people to read from the internet?',
      answerOptions: [
        { answerText: 'Web 1.0', isCorrect: true },
        { answerText: 'Web 2.0', isCorrect: false },
        { answerText: 'Web 3.0', isCorrect: false },
      ],
    },
     {
      questionText: 'This is about user - generated content and the readwriteweb',
      answerOptions: [
        { answerText: 'Web 2.0', isCorrect: false },
        { answerText: 'Web 1.0', isCorrect: false },
        { answerText: 'Web 3.0', isCorrect: true },
      ],
    },
    {
      questionText: 'Which of the following does not belong to the web 1.0?',
      answerOptions: [
        { answerText: 'Sites are static', isCorrect: false },
        { answerText: 'Focused on communities', isCorrect: true },
        { answerText: 'Companies Own or produce the Content', isCorrect: false },
        { answerText: 'Sites are not Interactive', isCorrect: false },
      ],
    },
    {
      questionText: ' which of the following is not an utility of WXBA?',
      answerOptions: [
        { answerText: 'Trading Signals', isCorrect: false },
        { answerText: 'Daily ETH airdrops ', isCorrect: true },
        { answerText: 'Monthly academic assessments', isCorrect: false },
        { answerText: 'Giveaways and occasional giftings', isCorrect: false },
      ],
    },
    {
      questionText: 'How many NFT collection is WXBA?',
      answerOptions: [
        { answerText: '77', isCorrect: false },
        { answerText: '777', isCorrect: true },
        { answerText: '7777', isCorrect: false },
        { answerText: '77.7', isCorrect: false },
      ],
    },
    {
      questionText: 'What does WXBA mean?',
      answerOptions: [
        { answerText: 'Workxiebillionaire Academy', isCorrect: true },
        { answerText: 'Workxiebillionaire Academic', isCorrect: false },
        { answerText: 'Workziebillionaire Academic', isCorrect: false },
        { answerText: 'Workziebillionaire Academy', isCorrect: false },
      ],
    },
    {
      questionText: 'On what blockchain is WXBA?',
      answerOptions: [
        { answerText: 'Ethereum ', isCorrect: true },
        { answerText: 'Solana', isCorrect: false },
        { answerText: 'Etheruem', isCorrect: false },
        { answerText: 'Polygon', isCorrect: false },
      ],
    },
    {
      questionText: 'What’s the mint price for WXBA?',
      answerOptions: [
        { answerText: '0.02ETH', isCorrect: true },
        { answerText: '0.002ETH', isCorrect: false },
        { answerText: '0.2ETH', isCorrect: false },
        { answerText: '2ETH', isCorrect: false },
      ],
    },
    {
      questionText: 'WXB has launched how many NFT collections?',
      answerOptions: [
        { answerText: '2', isCorrect: true },
        { answerText: '1', isCorrect: false },
        { answerText: '3', isCorrect: false },
        { answerText: '4', isCorrect: false },
      ],
    },
    {
      questionText: 'How many phases do we have in WXB roadmap?',
      answerOptions: [
        { answerText: '1', isCorrect: false },
        { answerText: '2', isCorrect: false },
        { answerText: '3', isCorrect: false },
        { answerText: '4', isCorrect: true },
      ],
    },
    {
      questionText: 'What does WXBG mean?',
      answerOptions: [
        { answerText: 'Workxiebillionaire general', isCorrect: false },
        { answerText: 'Workxiebillionaire game', isCorrect: false },
        { answerText: 'Workxiebillionaire god', isCorrect: false },
        { answerText: 'Workxiebillionaire Genesis', isCorrect: true },
      ],
    },
    {
      questionText: 'WXBG is launched on which blockchain?',
      answerOptions: [
        { answerText: 'Bitcoin', isCorrect: false },
        { answerText: 'Aptos', isCorrect: false },
        { answerText: 'Tezos', isCorrect: false },
        { answerText: 'Polygon', isCorrect: true },
      ],
    },
    {
      questionText: '_____ is a project of the people, for the people and by the people?',
      answerOptions: [
        { answerText: 'Democracy', isCorrect: false },
        { answerText: 'Government', isCorrect: false },
        { answerText: 'WXB', isCorrect: true },
        { answerText: 'NFT', isCorrect: false },
      ],
    },
    {
      questionText: 'Which of the following is not a known risk of NFTs?',
      answerOptions: [
        { answerText: 'Carbon emissions ', isCorrect: true },
        { answerText: 'Money laundering', isCorrect: false },
        { answerText: 'Collusion ', isCorrect: false },
        { answerText: 'Scamming', isCorrect: false },
      ],
    },
    {
      questionText: 'What does the acronym NFT stand for?',
      answerOptions: [
        { answerText: 'Non-financial token', isCorrect: false },
        { answerText: 'New fungible token', isCorrect: false },
        { answerText: 'Non-fungible token', isCorrect: true },
        { answerText: 'New financial token', isCorrect: false },
      ],
    },
    {
      questionText: 'What feature unites cryptocurrencies?',
      answerOptions: [
        { answerText: 'They are all illegal', isCorrect: false },
        { answerText: 'They were all invented by the same anonymous person ', isCorrect: false },
        { answerText: 'They are all used by criminals to launder money', isCorrect: false },
        { answerText: 'They are all based on blockchain', isCorrect: true },
      ],
    },
    {
      questionText: ' Which of the following is not a known benefit of an NFT?',
      answerOptions: [
        { answerText: 'They allow the owner the right to reproduce the asset ', isCorrect: true },
        { answerText: 'They allow a securitisation-like process for assets', isCorrect: false },
        { answerText: 'They allow the tracing of ownership and custody of an asset over time', isCorrect: false },
        { answerText: 'They allow owners to better control duplication of work by others', isCorrect: false },
      ],
    },
    {
      questionText: 'When you buy an NFT what do you get in the end?',
      answerOptions: [
        { answerText: 'The ability to sell the NFT', isCorrect: false },
        { answerText: 'The NFT itself', isCorrect: false },
        { answerText: 'The copyright of the original work', isCorrect: true },
        { answerText: 'The ability to reproduce or sell the original work', isCorrect: false },
      ],
    },
   
  ];
  */