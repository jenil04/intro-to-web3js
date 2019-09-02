## Web3 JavaScript API
Web3.js is a collection of modules for interacting with a local or a remote ethereum node. Web3.js will allow us to make requests to the contract to read or write data to the network through a JSON RPC API. 

We will use Web3.js in our dApp to interact with the auction contract.

For this tutorial, we will focus on prominently used web3.js modules and briefly discuss other features. 

## Compiling through Solc.js

[Solc.js](https://github.com/ethereum/solc-js) can be installed through npm for compiling your smart contract. In this stage, I've set up the compiles abi (application binary interface) and bytecode for you (can be found in the Auction.json file)!

## Deployment
The deployment process can be done by a number of options:
- Deploy the contract using truffle on the ropsten, rinkeby, kovan, or any other test network.
- Using infura.io to deploy our contract and manage our dApp through their API.
- Using Ganache-Client to access test accounts and deploy the contract from the testrpc. 

We will deploy our contract using truffle and Infura in this tutorial. Deploying our contract to an address makes it available for other peers in the network to make requests to the auction contract and interact with the functions such as making a bid.

We will later use the abi and contract address to write our React application frontend and utilize contract methods. 

## Questions

For any questions regarding this stage, please feel free to email me at jenil8888@gmail.com or DM at twitter.com/jenil_thakker. 
