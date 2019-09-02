var assert = require('assert')
const web3 = require('web3');

describe('Web3 stage tests', function () {
    describe('Test web3 functions', () => {
        it('Should return account balance', () => {
            web3.eth.getBalance(account, (err, wei) => {
                balance = web3.utils.fromWei(wei, "ether");
                assert(balance >= 0);
            });
        });
    });
});
