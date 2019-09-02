
const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { abi, bytecode } = require('./Auction.json');

const provider = new HDWalletProvider(
    // Part 1: enter your mnemonic from metamask account
    '',
    // Part 2: enter link with code infura will email when you sign up
    'https://ropsten.infura.io/v3/'
);

const web3 = new //Part 3: set web3 provider

const deploy = async () => {
    const accounts = await // Part 4: get the web3 accounts here for deployment.

    const result = await new // Part 5: add new web3 instance
        .deploy({ data: bytecode })
        .send({ gas: '1000000', from: accounts[0] });


    console.log('Contract deployed to ', result.options.address);
};

deploy();
