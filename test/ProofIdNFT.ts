import { expect } from "chai";
import { ethers } from "hardhat";
import {Signer} from "ethers"

describe("ProofIdNFT", function () {
  let proofIdNFTInstance: any;
  let accounts:any;
  let firstAccount:Signer;
  beforeEach(async() => {
    accounts = await ethers.getSigners();
    firstAccount = accounts[0]

    const ProofIdNFT = await ethers.getContractFactory("ProofIdNFT");
    proofIdNFTInstance = await ProofIdNFT.deploy();
  })

 it("mints", async() =>{
    const firstAddress =  await firstAccount.getAddress()
    await proofIdNFTInstance.mintNFT(firstAddress, "asdasdasd")
    const myBalance = await proofIdNFTInstance.balanceOf(firstAddress)

    expect(myBalance).to.equal(1)
 })
});
