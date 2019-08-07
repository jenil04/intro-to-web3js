const Auction = artifacts.require('Auction');

contract('Auction', function (accounts) {
    let contract;
    const sender = accounts[0];
    beforeEach(async () => {
        contract = await Auction.new({
            from: sender
        });
    });

    it('deploys a contract', () => {
        assert.ok(Auction.options.address);
    });
});