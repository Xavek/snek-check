// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const Product = await hre.ethers.getContractFactory("Products");
  const itsProduct = await Product.deploy();

  await itsProduct.deployed();

  console.log("Product Conatract deployed to :", itsProduct.address);

  // Adding the products
  /*
    nameOfProd: _productName,
                orgnCounty: _originCountry,
                uniqueId: _id
  */
  const addProdTxn = await itsProduct.addProd("AirJordan", "India", 69);
  addProdTxn.wait();
  const addPrdo2 = await itsProduct.addProd("AirMax", "UAE", 676);
  addPrdo2.wait();
  // Bug Resolved
  const isProd = await itsProduct.getProd(1);

  console.log(isProd);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
