require('dotenv').config();
const HDWalletProvider = require("@truffle/hdwallet-provider");

const infuraProjectId = process.env.INFURA_PROJECT_ID;
const metamaskMnemonic = process.env.METAMASK_MNEMONIC;


module.exports = {
  networks: {
    optimism: {
      host: 'localhost',
      port: 8545,
      network_id: '*',
      gasPrice: 0,
      gas: 8000000
    },
    sepolia: {
      provider: () => new HDWalletProvider(
        metamaskMnemonic,
        `https://sepolia.infura.io/v3/${infuraProjectId}`
      ),
      network_id: 11155111, // Sepolia's network ID
      gas: 8000000,
      gasPrice: 20000000000, // 20 Gwei
    },
  },

  mocha: {
  },

  compilers: {
    solc: {
      version: "0.8.0",
    }
  },
};
