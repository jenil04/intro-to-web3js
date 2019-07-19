## Compiling & Generating ABI

In this stage we will be compling our auction smart contract, 
and generating bytecode using truffle.

### Requirements
- Install truffle using `npm install -g truffle`
- Install solidity compiler using `npm install solc-js`

### Get Started

1. In your console create a directory for the application and `cd` into the directory.
2. Type `truffle init` to get started with using truffle.
3. Now, let's add our auction.sol file to the contracts folder.
4. Before we compile, let's create a `2_deploy_contract.js` file and add the code below.

```javascript
var auction = artifacts.require("./auction.sol");

module.exports = function(deployer) {
  deployer.deploy(auction, 1, {gas: 6700000});
};
```
5. Inside the contracts directory, let's compile our contracts usng `truffle compile`.
6. After a successful compilation, let's use `truffle migrate` to deploy our smart contract.

That's it! Next, we will start working on our client-side application! :)
