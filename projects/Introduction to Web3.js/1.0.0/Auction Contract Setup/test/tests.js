const Auction = artifacts.require('Auction');

contract('Auction', function (accounts) {
    let contract;
    const sender = accounts[0];
    beforeEach(async () => {
        contract = await Auction.new({
            from: sender
        });
    });

    it('can enter one account', async () => {
        await contract.submitBid().send({
            from: accounts[1],
            value: web3.utils.toWei('0.02', 'ether')
        });
        const bidders = await contract.methods.getBidders().call({
            from: accounts[0]
        });
        assert.equal(1, bidders.length);
        assert.equal(accounts[1], bidders[0]);
    });

    it('can enter mutiple accounts', async () => {
        await Auction.methods.submitBid().send({
            from: accounts[1],
            value: web3.utils.toWei('0.02', 'ether')
        });
        await Auction.methods.submitBid().send({
            from: accounts[2],
            value: web3.utils.toWei('0.02', 'ether')
        });
        await Auction.methods.submitBid().send({
            from: accounts[3],
            value: web3.utils.toWei('0.02', 'ether')
        });
        const bidders = await Auction.methods.getBidders().call({
            from: accounts[0]
        });

        assert.equal(3, bidders.length);
        assert.equal(bidders[0], accounts[1]);
        assert.equal(bidders[1], accounts[2]);
        assert.equal(bidders[2], accounts[3]);
    });

    it('requires a min amount of ether to enter', async () => {
        try {
            await Auction.methods.submitBid().send({
                from: accounts[0],
                value: 100
            });
            assert(false);
        } catch (err) {
            assert(err);
        }
    });

    it('transfer balance from highest bidder and resets bidders array', async () => {
        await Auction.methods.submitBid().send({
            from: accounts[4],
            value: web3.utils.toWei('2', 'ether')
        });

        const initialBalance = await web3.eth.getBalance(accounts[4]);

        await Auction.methods.determineWinner().send({
            from: accounts[0]
        })

        const finalBalance = await web3.eth.getBalance(accounts[4]);

        assert.equal(web3.utils.toWei('2', 'ether'), finalBalance - initialBalance);
    });
});