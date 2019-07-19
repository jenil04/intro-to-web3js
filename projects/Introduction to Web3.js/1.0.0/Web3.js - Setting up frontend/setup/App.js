import React, { Component } from "react";
import web3 from "./web3";
import auction from "./auction";
import { Layout } from "./Layout";
import "./App.css";
import { Button } from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      i: 0,
      maintxt: "Decentralized Auction on the Ethereum Blockchain",
      speed: 100,
      displaytxt: "",
      tmpTitle: "Calculating number of active users...",
      fullTitle: "There are currently {`this.state.bids.length`} ",
      j: 0,
      bids: [],
      bidders: [],
      seller: "",
      auctionValue: "",
      highestBidder: "",
      value: "",
      message: ""
    };
  }

  async componentDidMount() {
    this.timeout = setInterval(() => {
      if (this.state.i < this.state.maintxt.length) {
        let newI = this.state.i + 1;
        this.setState({ i: newI });
      }
    }, 80);
    this.timeout = setInterval(() => {
      if (this.state.j < this.state.tmpTitle.length) {
        let newJ = this.state.j + 1;
        this.setState({ j: newJ });
      }
    }, 200);

    // ADD YOUR CODE HERE
    // Set up contract variables using auction.methods.

    this.setState({
      seller,
      highestBidder,
      bidders,
      auctionValue
    });
  }

  onEnter = async event => {
    event.preventDefault();

    // NEXT STAGE

    this.setState({
      message: "Processing..."
    });

    // NEXT STAGE

    this.setState({
      message: "You have been entered into the auction!"
    });
  };

  onClick = async () => {

    this.setState({
      message: "Picking the highest bidder..."
    });

    // NEXT STAGE

    this.setState({
      message: "Sold, to the highest bidder!"
    });
  };

  render() {
    let displaytext = this.state.maintxt.substring(0, this.state.i);
    let displayTitle = "";
    if (this.state.j >= this.state.tmpTitle.length) {
      displayTitle = this.state.fullTitle;
    } else {
      displayTitle = this.state.tmpTitle.substring(0, this.state.j);
    }
    return (
      <React.Fragment>
      <Layout>
      <div class= "text-center" >
      <h2 class="text-white justify-center text-center" > { displaytext } < /h2>
        < h5 class="w-full block text-white text-5xl font-fancy font-bold text-center justify-center mb-8" >
          There are currently { this.state.bids.length } people entered,
            competing to buy{ " " }
    { web3.utils.fromWei(this.state.auctionValue, "ether") } ether{ " " }
    </h5>

      < hr />

      <form onSubmit={ this.onEnter } >
        <h4 class="text-white justify-center" > Join the Auction < /h4>
          < div >
          <label class="text-white justify-center font-bold text-center" > Bid amount: </label>
            < input
    value = { this.state.value }
    onChange = {
      event =>
        this.setState({ value: event.target.value })
    }
      />

      </div>
      < Button class= "text-center" > Make a bid < /Button>
        < hr />
        </form>
        < h4 class="text-white justify-center" > Reaveal the Highest Bidder < /h4>
          < Button onClick = { this.onClick } class = "text-center" > Highest Bidder < /Button>
            < h4 > { this.state.message } < /h4>
            < /div>
            < /Layout>
            < /React.Fragment>
    );
  }
}

export default App;
