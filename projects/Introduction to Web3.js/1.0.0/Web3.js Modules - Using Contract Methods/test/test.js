const assert = require('assert');
const Modules = require('../modules.js');

let modules;
describe('Web3 Stage Tests', function () {
    before(() => {
        modules = new Modules();
    });
    describe('Testing web3 functions', function () {
        it('balance should be more than or equal to 0', function () {
            let balance = modules.getAccountInfo();
            assert(balance >= 0);
        })

        it('seller should be set to an 0x address', function () {
            let seller = modules.getContractInfo();
            assert.equal(seller, 0x0000000000000000000000000000000000000000);
        })

        it('Testing for transaction info', function () {
            let tx = modules.getTxInfo();
            assert.ok(tx);
        })
    })
})
