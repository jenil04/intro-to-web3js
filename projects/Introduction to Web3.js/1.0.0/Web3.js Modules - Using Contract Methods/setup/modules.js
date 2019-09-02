const Web3 = require("web3");

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

const address = "0x0bb3f4d023f3e10df7feeec5396dc96445f61899";
const contract = new web3.eth.Contract(abi, address);

class Modules {
    constructor() {
        this.account = "0xBd13f14efE7861C38de3e8F23B63387CF466Bd8b";
        this.balance = '';
        this.result = '';
    }

    // Checking account balances
    getAccountInfo() {
        web3.eth.getBalance(this.account, (err, wei) => {
            this.balance = web3.utils.fromWei(wei, "ether");
        });
        return this.balance;
    }

    // USING CONTRACT METHODS

    getContractInfo() {
        // Prints out the msg.sender (seller)
        
        return this.result;
    }

    getTxInfo() {
        // Printing transaction data
        return ;
    }
}

module.exports = Modules;