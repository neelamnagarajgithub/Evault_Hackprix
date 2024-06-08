
require("@nomicfoundation/hardhat-toolbox") ;
const dotenv = require('dotenv');

dotenv.config();

const {SEPOLIA_URL,SECRET_KEY}=process.env;

const config={
  solidity: "0.8.24",
    networks: {
       sepolia: {
         url: SEPOLIA_URL,
         accounts: SECRET_KEY!==undefined?[SECRET_KEY]:[] ,
       },
    },
};

module.exports=config;