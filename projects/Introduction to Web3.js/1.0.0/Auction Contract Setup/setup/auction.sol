pragma solidity  ^0.4.19;

contract Auction {
  //  Represents a set of people entering the auction to bid on a product.
  address[] public bidders;
  
  // Represents the bids received by the seller.
  uint256[] public bids;
  
  // Represents an address auctioning a product.
  address public seller;
  
  // The highest bidder for the auction.
  address highestBidder;

  function auction() public {
      seller = msg.sender;
  }

  function submitBid() public payable {        
    // ADD YOUR CODE HERE
  }
    

  function determineWinner() public {
    // ADD YOUR CODE HERE


   // Reset: for a new auction round.
   bidders = new address[](0);
 }

  function getHighestBidder() view public returns (address) {
    return highestBidder;
  }
  
  function getBidders() view public returns (address[]){
      return bidders;
  }
  
  function getBids() view public returns (uint256[]) {
      return bids;
  }
}
