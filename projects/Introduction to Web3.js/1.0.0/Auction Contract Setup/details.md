## Auction Contract
In this stage we will finish writing our auction contract. The user can interact with this contract to register and bid for a product. There's two important functions in the contract -- `submitBid` and `determineWinner`. 

The `determineWinner` function selects the user with the highest bid and requests to transfer ether (MetaMask) to complete auctioning the product. 

## Tests

If you run into issues with implementing the functions, feel free to take a look at `tests.js`. 