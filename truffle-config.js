require("babel-register");
require("babel-polyfill");
require("dotenv").config({path: "./.env"});

const HDWalletProvider = require('@truffle/hdwallet-provider');
const bscTest = "https://data-seed-prebsc-1-s1.binance.org:8545/";
const bscMain = "https://bsc-dataseed2.binance.org";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: 5777, // Match any network id
    },
    develop: {
      port: 8545,
      host: "127.0.0.1",
      network_id: 1337
    },
    ganache_local: {
      provider: function() {
        return new HDWalletProvider(process.env.MNEMONIC, "http://127.0.0.1:7545", AccountIndex)
      },
      network_id: 5777
    },
    bscTestnet: {
      provider: () => new HDWalletProvider(process.env.MNEMONIC, bscTest),
      network_id: 97,   // This network is yours, in the cloud. 
      production: true,    // Treats this network as if it was a public net. (default: false)
      networkCheckTimeout: 1000000,
      timeoutBlocks: 200
    },
    bscMainnet: {
      provider: () => new HDWalletProvider(process.env.MNEMONIC, bscMain),
      network_id: 56,   // This network is yours, in the cloud. 
      confirmations: 10,
      networkCheckTimeout: 1000000,
      timeoutBlocks: 200,
      skipDryRun: true
    }
  },
  contracts_directory: "./src/contracts/",
  contracts_build_directory: "./src/abis/",
  compilers: {
    solc: {
      version: "pragma",
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
