const HDWalletProvider = require('truffle-hdwallet-provider');
// PART 1: INSTANTIATE WEB3
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    '',
    'rinkeby.infura.io/v3/')

const web3 = new Web3(provider);

const deploy = async () => {
    // PART 2: GET ACCOUNTS
    
    console.log(`attempting to deploy from account ${accounts[0]}`);


    // PART 3: USE WEB3.ETH.CONTRACTS


    console.log(interface);
    console.log(`contract deployed to ${result.options.address}`);
}
deploy();