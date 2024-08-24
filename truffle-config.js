// require('babel-register')
// require('babel-polyfill')
require('dotenv').config()
const HDWalletProvider = require('@truffle/hdwallet-provider')

module.exports = {
  // Configure networks (Localhost, Rinkeby, etc.)
  networks: {
    development: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*', // Match any network id
    },
    sepolia: {
      provider: () =>
        new HDWalletProvider(process.env.SECRET_KEY, process.env.ENDPOINT_URL),
      from: "0x9cc68505B2fa69a936E032B12c654E5bA8b52bcE",
      network_id: 11155111, // Rinkeby's id
      gas: 10000000, // Rinkeby has a lower block limit than mainnet
      confirmations: 2, // # of confs to wait between deployments. (default: 0)
      networkCheckTimeout: 10000,
      timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true, // Skip dry run before migrations? (default: false for public nets )
    },
  },
  contracts_directory: './contracts/',
  contracts_build_directory: './src/shared/abis/',
  // Configure your compilers
  compilers: {
    solc: {
      version: '0.8.11',
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
}
