## Deploying the Auction Contract on Ropsten

In this stage we will be deploying our auction smart contract on the ropsten ethereum test network,using truffle and Infura. Before we go on with this stage, let's make sure we have all the dependencies installed. 

### Requirements
- Set up an [infura](https://infura.io/) account to access a free ethereum node.
- Create and set up your [metamask](https://metamask.io/) account.
 

### Deployment

Open up deploy.js and set up the following web3.js instances. For more information about using web3 and getting started, feel free to read through the details section of this stage!

- Part 1: From your metamask account find your unique mnemonic phrase and paste it within the quotes. 

- Part 2: After signing up on infura, paste your project id after the `v3/` in deploy.js.

- Part 3: Set up your web3 [provider](https://web3js.readthedocs.io/en/v1.2.1/web3.html#setprovider) (arguments: provider). 

- Part 4: Use the [getAccounts()](https://web3js.readthedocs.io/en/v1.2.1/web3-eth.html) function to set up our deployment account.

- Part 5: Set up your web3 instance for parsing the [abi](https://web3js.readthedocs.io/en/v1.2.1/web3-eth-contract.html#eth-contract) from Auction.json. 

That's it! Next, we will start working on our client-side application! :)
