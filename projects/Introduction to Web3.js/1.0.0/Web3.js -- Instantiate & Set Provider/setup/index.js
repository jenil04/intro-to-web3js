"use strict";

//**Instantiate accounts here**//

// Load the ABI produced by the compiler
let abi = JSON.parse('');

// Load the contract.
let contract = new web3.eth.Contract(abi);
contract.options.address = "";

function submitBid() {
    //Add your code here
}

function updateResults() {
    // Add your code here.
}

// Load initial results upon loading.
updateResults();
