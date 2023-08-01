require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ethers");
require("@nomicfoundation/hardhat-verify");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  settings: {
    optimizer: {
      enabled: true,
      runs: 1000,
    },
  },
  networks: {
    hardhat: {
    },
    mumbai: {
      url: 'https://polygon-mumbai.infura.io/v3/4458cf4d1689497b9a38b1d6bbf05e78',
      accounts: [
      ]
    }
  },
  etherscan: {
    apiKey: {
      polygonMumbai: 'WXTE5DITDMINM21Y6BWD7282IFRAWQMCAF'
    }
  }
};
