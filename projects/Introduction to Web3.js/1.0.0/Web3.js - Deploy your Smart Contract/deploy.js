
const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { abi, bytecode } = require('./Auction.json');

const provider = new HDWalletProvider(
    // enter your mnemonic from metamask account
    'task honey pony casual globe piano clip prison perfect castle vintage devote',
    // enter link with code infura will email when you sign up
    'https://ropsten.infura.io/v3/d662bdba98174b5a9b7c40c6fd631314'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    const result = await new web3.eth.Contract(abi)
        .deploy({ data: bytecode })
        .send({ gas: '1000000', from: accounts[0] });

    console.log('Contract deployed to ', result.options.address);
};

deploy();
