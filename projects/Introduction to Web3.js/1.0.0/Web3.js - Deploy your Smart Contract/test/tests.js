
const assert = require('assert');
const Web3 = require('web3');
const { abi, bytecode } = require('../Auction.json');
let accounts = web3.eth.getAccounts();

const Auction = web3.eth.contract(abi);

const deploy = () => {
    const deployParameters = {
        arguments: [],
        data: bytecode,
    }
    return Auction.deploy(deployParameters).estimateGas().then((gas) => {
        return Auction.deploy(deployParameters).send({
            from: accounts[0],
            value,
            gas
        });
    })
}


describe('Auction Contract', () => {
    it('deploys a contract', () => {
        assert.ok(Auction)
    });
})