const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { CRYPTO_SPARTANS_CONTRACT_ADDRESS } = require("../constants");

/**
 * 
 * @author pritam.nath
 */
async function main() {
  // Address of the whitelist contract that you deployed in the previous module
  const cryptoDevsNFTContract = CRYPTO_SPARTANS_CONTRACT_ADDRESS;
  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so cryptoSpartansTokenContract here is a factory for instances of our CryptoDevs contract.
  */
  const cryptoSpartansTokenContract = await ethers.getContractFactory(
    "CryptoSpartansToken"
  );

  // deploy the contract
  const deployedCryptoSpartansTokenContract = await cryptoSpartansTokenContract.deploy(
    cryptoDevsNFTContract
  );

  // print the address of the deployed contract
  console.log(
    "Crypto Spartans Contract Address:",
    deployedCryptoSpartansTokenContract.address
  );
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
