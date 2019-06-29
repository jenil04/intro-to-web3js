"use strict";

// Web3 is the JavaScript library for interacting with the
// Ethereum blockchain.  It can be used for both client-side
// and server-side JavaScript.
const Web3 = require('web3');

const fs = require('fs');


// Default parameters for calling Ethereum
const GAS = 1500000;
const GAS_PRICE_IN_ETH = '0.00003';


function deployContract(url, contractName, from, gas = GAS, gasPrice = GAS_PRICE_IN_ETH) {
    let web3 = new Web3(url);
    let bytecode = fs.readFileSync(`Auction_sol_Auction.bin`).toString();
    let abi = JSON.parse(fs.readFileSync(`Auction_sol_Auction.abi`).toString());

    // Creating a new deployed contract.
    let deployedContract = new web3.eth.Contract(abi);

    // Deploying the contract -- this uses JS's promises API.
    // We assume that there are no arguments to the constructor.
    // If there are, you would need to pass them to the arguments
    // property of the object passed to 'deploy'.
    deployedContract.deploy({
        data: bytecode,
        arguments: []
    }).send({
        from: '0xBd13f14efE7861C38de3e8F23B63387CF466Bd8b',
        gas: gas,
        gasPrice: web3.utils.toWei(gasPrice, 'ether')
    }).then((newContractInstance) => {
        deployedContract.options.address = newContractInstance.options.address;
        console.log(`Contract address: 0xBd13f14efE7861C38de3e8F23B63387CF466Bd8b`);
    });
}

if (process.argv0 === 'node') {
    process.argv.shift();
}

let contractName = process.argv[1];
let fromAddress = process.argv[2];

deployContract("http://localhost:8545", contractName, fromAddress);