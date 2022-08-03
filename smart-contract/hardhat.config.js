require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const ALCHEMY_API_KEY_URL = process.env.ALCHEMY_API_KEY_URL;

const RINKEBY_PRIVATE_KEY = process.env.RINKEBY_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.9",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/TXSFNibxlR5u_KEwvNMTtNxBLgBlXrZh",
      accounts: ["bf2ee9b93e957e076d8d9280d7962126a33d9c040ab32ec8c1027015db4cee8e"],
    },
  },
};
// Crypto Devs Token Contract Address: 0x245a42168A0EB76A7c06656c6B5FCd2dE1024e61