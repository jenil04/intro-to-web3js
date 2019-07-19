## Creating an Auction Contract

We will first start by creating an auction contract, that we will later connect with a frontend using web3.js.

### Implement the submitBid() function

The `submitBid` function allows a bidder to enter the auction, and make a bid. 

In this task you will:
- Add a `require` statement making sure that the minimum amount of bid must be 0.01 ether.
- Initialize `bidders` and `bids` with the first participant for the auction (`msg.sender`).


### Implement the determineWinner() function

The `determineWinner` function is used to calculate the highest bidder from the array of `bidders`.

In this task you will:
- Declare a highestBid and an index (`i`) for calculating the highestbid from the array of bids.
- Iterate over the `bids` to calculate and assign the highestBid.
- Update highestBidder and assign it to one of the maximum values in the `bidders` array.
- Transfer the `highestBid` from the highestBidder.