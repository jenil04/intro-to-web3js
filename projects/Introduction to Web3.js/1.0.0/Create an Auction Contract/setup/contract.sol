pragma solidity >= 0.5.0;

contract Auction {
  mapping(string => uint256) bids;

  string highestBidder;
  bool firstBid = true;

  function submitBid(string memory name, uint256 bid) public {
    //ADD YOUR CODE HERE
  }

  function getHighestBidder() view public returns (string memory) {
    return highestBidder;
  }

  function getTopBid() view public returns (uint256) {
    return bids[highestBidder];
  }
}