import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox"
import "dotenv/config"


const { API_URL, PRIVATE } = process.env;
console.log(PRIVATE)
const config: HardhatUserConfig = {
  solidity: "0.8.17",
   networks: {
      goerli: {
         url: API_URL,
         accounts: [`${PRIVATE}`]
      }
   }
};

export default config;
