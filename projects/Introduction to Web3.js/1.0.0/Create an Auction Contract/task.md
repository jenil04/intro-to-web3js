## Creating an Auction Contract

We will first start by creating an auction contract, that we will later connect with a frontend using web3.js.

### Implement the submitBid() function

The `submitBid` function allows a candidate (`name`) with an associated`bid` value to add their value to the `bids` mapping. 

In this task you will:
- Check whether the candidate's bid -- `name` is less than the `bid`.
- Update the highestBidder and the `bids` data structure. 

