## Installing Web3.js 

You can install web3.js using the command -- `npm install web3`. Make sure to download a stable version. 

## Web3 Modules
For a detailed overview, check [this](https://web3js.readthedocs.io/en/v1.2.1/web3.html) out.

- Web3.modules: This contains a list of modules: eth, net, personal, Shh, Bzz.

    - To use any of these methods: try `web3.eth`, or `web3.net` and so on. 

- To get a list of all providers: you can implement `web3.providers`.

- `web3.eth`: The web3-eth allows you to interact with the ethereum smart contract for your dapp.

    - Usage: `web3.eth.Contract(abi, address)` or `web3.eth.getAccounts()`.

- `web3.*.net` - This module allows you to interact with the Ethereum network properties.

    - Usage: `web3.eth.net.isListening([callback])`

- `web3.utils` - Utility functions for JS.

    - Usage: `web3.utils.randomHex(size)` or `web3.utils.toWei()`

- `web3.bzz` - This module can be utilized for decentralized file storage. 

    - Usage: `web3.bzz.givenProvider`

- `web3.shh` - You can use shh for using the whisper protocol for broadcasting. 

    -  Usage: `web3.eth.net.getPeerCount([callback])`


### Errors
When it comes to sending transactions, infura (ropsten network) doesnot allow sending raw tx. Try [this](https://infura.io/docs/ethereum/json-rpc/eth_sendRawTransaction) or [this](https://ethereum.stackexchange.com/questions/26999/invalid-json-rpc-response-error-for-sendtransaction-on-infura-ropsten-node-t).

### Questions
For any questions regarding this stage, please feel free to email me at jenil8888@gmail.com or DM at twitter.com/jenil_thakker.