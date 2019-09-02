// instantiating web3
const Web3 = require("web3");

// Loading smart contract abi and bytecode.
const abi = [
    {
        constant: true,
        inputs: [],
        name: "seller",
        outputs: [
            {
                name: "",
                type: "address"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [
            {
                name: "",
                type: "uint256"
            }
        ],
        name: "bids",
        outputs: [
            {
                name: "",
                type: "uint256"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [
            {
                name: "",
                type: "uint256"
            }
        ],
        name: "bidders",
        outputs: [
            {
                name: "",
                type: "address"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: false,
        inputs: [],
        name: "auction",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: false,
        inputs: [],
        name: "submitBid",
        outputs: [],
        payable: true,
        stateMutability: "payable",
        type: "function"
    },
    {
        constant: false,
        inputs: [],
        name: "determineWinner",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "getHighestBidder",
        outputs: [
            {
                name: "",
                type: "address"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "getBidders",
        outputs: [
            {
                name: "",
                type: "address[]"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "getBids",
        outputs: [
            {
                name: "",
                type: "uint256[]"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    }
];
// Setting up infura rpc url
const rpc = "https://ropsten.infura.io/v3/d662bdba98174b5a9b7c40c6fd631314";
const web3 = new Web3(rpc);

// GET ACCOUNT INFORMATION

// Paste your metamask account address here
const account = "";

// Checking account balances
// ADD YOUR CODE HERE (use the getBalance method to print out your account balance)





