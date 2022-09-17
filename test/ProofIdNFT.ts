import { expect } from "chai";
import { ethers } from "hardhat";
import { Signer } from "ethers"

describe("ProofIdNFT", function () {
  let proofIdNFTInstance: any;
  let accounts: Signer[];
  let firstAccount: Signer;
  let firstAddress: string

  beforeEach(async () => {
    accounts = await ethers.getSigners();
    firstAccount = accounts[0]
    firstAddress = await firstAccount.getAddress()
    const ProofIdNFT = await ethers.getContractFactory("ProofIdNFT");
    proofIdNFTInstance = await ProofIdNFT.deploy();
  })

  it("mints", async () => {
    await proofIdNFTInstance.mintNFT(firstAddress, "asdasdasd")
    const myBalance = await proofIdNFTInstance.balanceOf(firstAddress)

    expect(myBalance).to.equal(1)
  })

  it("returns all NFTS", async () => {
    await proofIdNFTInstance.mintNFT(firstAddress, "1")
    await proofIdNFTInstance.mintNFT(firstAddress, "2")
    await proofIdNFTInstance.mintNFT(firstAddress, "3")

    const allNFTS = await proofIdNFTInstance.getAllNFTs(firstAddress)

    console.log("All NFTs", allNFTS)
  })
});
