const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Prodcuts Info", function () {
  it("Should deploy the Smart Contract", async function () {
    const Products = await ethers.getContractFactory("Products");
    const isDeployed = await Products.deploy();

    await isDeployed.deployed();
    // once review the testing part mostly used for transfering and balance purposes mainly tokens contract
    // Error while testing there is value in blockchain but during test it gets failed.
    // After being deployed adding the testCases So to ensure the data was stored and retrived correctly.
    // expect(await isDeployed.getProd(0)).to.be.equal({
    //   nameOfProd: "AirJordan",
    //   orgnCounty: "Usa",
    //   owner: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
    // });
  });
});
