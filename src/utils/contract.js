import { ethers } from "ethers";

import abi from "./products.json";

const contractAddress = "0xC0E26cA31ab16247F3dD44Dc41c43F797Ff94F56";
const contractABI = abi.abi;

export default function connectToContract(ethereum) {
  if (ethereum) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
  } else {
    return undefined;
  }
}
