## Creating an Auction Contract

Hey there! We will first start by creating an auction contract and 

For more detaisl on smart contract

### Implement the submitBid() function

The `submitBid` function allows a bidder to enter the auction, and make a bid. 

In this task you will:
- Push the first participant for the auction onto `bidders` (`msg.sender`) 
- Push the first bid onto `bids` (`msg.value`)

### Implement the determineWinner() function

The `determineWinner` function is used to calculate the highest bidder from the array of `bidders`.

In this task you will:
- Declare a highestBid and an index (`i`) for calculating the highestbid from the array of bids.
- Iterate over the `bids` to calculate and assign the highestBid.
- Update highestBidder and assign it to one of the maximum values in the `bidders` array.
- Transfer the `highestBid` from the highestBidder.