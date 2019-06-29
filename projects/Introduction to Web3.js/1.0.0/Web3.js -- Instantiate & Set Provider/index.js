"use strict";

let web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
let account;
web3.eth.getAccounts().then((f) => {
    account = f[0];
});

// Load the ABI produced by the compiler
let abi = JSON.parse('[{"constant":true,"inputs":[],"name":"getHighestBidder","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"},{"name":"bid","type":"uint256"}],"name":"submitBid","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getTopBid","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]');

// Load the contract.
let contract = new web3.eth.Contract(abi);
contract.options.address = "0xBd13f14efE7861C38de3e8F23B63387CF466Bd8b";

function submitBid() {
    let bid = parseInt($("#bid").val());
    let bidder = web3.utils.toHex(bid);
    contract.methods.submitBid("Jenil", 50).send({ from: account }).then(updateResults);
}

function updateResults() {
    contract.methods.getHighestBidder().call().then((f) => {
        $("#bidder").html(f);
    });
    contract.methods.getTopBid().call().then((f) => {
        $("#bid").html(f);
    });
}

// Load initial results upon loading.
updateResults();
