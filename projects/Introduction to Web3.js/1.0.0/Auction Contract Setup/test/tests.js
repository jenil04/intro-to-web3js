const Auction = artifacts.require('Auction');

contract('Auction', function (accounts) {
    let contract;
    let _bidder = accounts[0];
    beforeEach(async () => {
        contract = await Auction.new({
            from: _bidder
        });
    });

    describe('Tests for the submitBid() function', function () {
        it('should initialize the bids and the bidders array', async function () {
            let submitBid = await contract.submitBid({ from: _bidder, 
            value: web3.toBigNumber(web3.toWei('0.02', 'ether')) });
        });
    });
});