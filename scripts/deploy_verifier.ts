import { ethers } from "hardhat";

async function main() {
  const RangeProofVerifier = await ethers.getContractFactory("RangeProofVerifier");
  const rangeProofVerifierInstance = await RangeProofVerifier.deploy();

  await rangeProofVerifierInstance.deployed();

  console.log("Deployed Range Proof Verifier")
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});