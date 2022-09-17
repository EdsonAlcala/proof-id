import { ethers } from "hardhat";

async function main() {
  const PID = await ethers.getContractFactory("ProofIdNFT")
  const myNFT = await PID.deploy()
  await myNFT.deployed()
  console.log("Contract deployed to address:", myNFT.address)
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })