pragma solidity >= 0.5.0;

contract Auction {
  // Keeping track of bids submitted by candidates.
  mapping(address => uint256) bids;

  // The latest bid received.
  address public latestBidder;
  uint256 latestBid;

  // Manager/Seller for the auction.
  address public seller;

  address highestBidder;
  bool firstBid = true;
  
  function auction(uint256 bid) public {
      seller = msg.sender;
      latestBid = bid * 1 ether;
  }

  function submitBid(address name, uint256 bid) public {
    // ADD YOUR CODE HERE.
  }

  function getHighestBidder() view public returns (address) {
    return highestBidder;
  }

  function getTopBid() view public returns (uint256) {
    return bids[highestBidder];
  }
}
