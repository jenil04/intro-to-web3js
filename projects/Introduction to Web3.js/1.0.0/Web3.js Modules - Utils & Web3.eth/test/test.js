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

        it('Testing the hash function', function () {
            let hash = modules.hashStr();
            assert.equal(hash, 0x9159e86ab404edde107a2ddf13fb802ba9049e48fd10e3eba0238273972cbf6d);
        })

        it('Testing the random hex function', function () {
            let hex = modules.randomHexNum();
            assert.ok(hex);
        })

        it('Testing for the getBlockNum function', function () {
            let blk = modules.getBlockNum();
            assert.ok(blk);
        })
    })
})
