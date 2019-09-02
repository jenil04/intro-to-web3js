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
const account = "0xBd13f14efE7861C38de3e8F23B63387CF466Bd8b";

// Checking account balances
web3.eth.getBalance(account, (err, wei) => {
    balance = web3.utils.fromWei(wei, "ether");
    console.log("The balance of your account is: " + balance);
});

// Interacting with your smart contract.
const address = "0x0bb3f4d023f3e10df7feeec5396dc96445f61899";
const contract = new web3.eth.Contract(abi, address)

// USING CONTRACT METHODS

// Prints out the msg.sender (seller)
contract.methods.seller().call((err, result) => {
    console.log("The current seller of the auction is: " +
        result)
})

// Printing transaction data
console.log("Find the deployment transaction details below: ")
web3.eth.getTransaction('0x62a20316c4029dcf6eb89d968d5b52a757d5503cbee6c96d91485a97f3151fc1', console.log)



