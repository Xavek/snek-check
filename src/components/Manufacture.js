import { ethers } from "ethers";
import React, { useEffect, useRef, useState } from "react";
import connectToContract from "../utils/contract";
import abi from "../utils/products.json";
/*
once the data is gone from here, then the loading spinner kind of thiogs could be added.
then the data would go to wite upon the blockchain.
then th data would be populated at the products place.
 */
const Manufacture = () => {
  const [isAccConect, setAccCon] = useState(false);
  const refprodName = useRef(null);
  const reforgnConty = useRef(null);
  const refunqId = useRef(null);

  const contractAddress = "0xC0E26cA31ab16247F3dD44Dc41c43F797Ff94F56";
  const contractAbi = abi.abi;

  const handleAccounts = (accounts) => {
    if (accounts.length > 0) {
      const account = accounts[0];
      console.log(account);
      localStorage.setItem("wallet_address", account);
    }
  };

  const conectToMetaMask = async () => {
    if (window.ethereum) {
      if (window.ethereum) {
        window.ethereum.on("chianChnaged", (_chainId) =>
          window.location.reload()
        );
        const chainId = await window.ethereum.request({
          method: "eth_chainId",
        });
        const rinkebyId = "0x4";
        if (chainId === rinkebyId) {
          const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
          });
          handleAccounts(accounts);
        } else {
          alert("Please use rinkeby network");
        }
      }
    }
  };

  useEffect(() => {
    const address = localStorage.getItem("wallet_address");
    if (address) {
      setAccCon(true);
    }
  }, []);

  /*This basically handles the form elements.
  It handles all the input fields and prepares to send over the blockchain
  Now that the it is connected to the metamask it should now when Register Product is clicked it must sign by the acc holder and then it must be written in blockchain.
  */
  const handleSubmit = async (e) => {
    e.preventDefault();
    const prodName = refprodName.current.value;
    const orgnConty = reforgnConty.current.value;
    const uniqueId = refunqId.current.value;
    refprodName.current.value = "";
    reforgnConty.current.value = "";
    refunqId.current.value = "";
    const intUniq = parseInt(uniqueId);
    console.log({ prodName, orgnConty, intUniq });

    if (!connectToContract) {
      console.error("This Object is Required");
      return;
    }

    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const prodContract = new ethers.Contract(
        contractAddress,
        contractAbi,
        signer
      );
      const createProd = await prodContract.addProd(
        prodName,
        orgnConty,
        intUniq
      );
      console.log("Create transaction started", createProd.hash);

      await createProd.wait();
      alert("Product Added...");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {/* This div would would be the container for the p tag with the Register your Products. */}
      <div>
        <h4>Add Your Product to Decentralized Database.</h4>
      </div>
      {/* This div would contain the form element  */}
      <div>
        {/* This div would conect to the metamask */}
        <div>
          {isAccConect ? (
            <button>Connected</button>
          ) : (
            <button onClick={conectToMetaMask}>Connect to Metamask</button>
          )}
        </div>
        <div>
          <label htmlFor="productName">Product Name</label>
          <input
            required
            id="productName"
            ref={refprodName}
            type="text"
            placeholder="Enter Name of Product"
          />
        </div>
        <div>
          <label htmlFor="originCountry">Origin Country</label>
          <input
            required
            id="originCOuntry"
            ref={reforgnConty}
            type="text"
            placeholder="Enter the Manufactured country"
          />
        </div>
        <div>
          <label htmlFor="uniqueId">Unique ID</label>
          <input
            required
            id="uniqueId"
            ref={refunqId}
            type="number"
            placeholder="Enter the Unique ID"
          />
        </div>
        <div>
          <button onClick={handleSubmit}>Register Product.</button>
        </div>
      </div>
    </>
  );
};

export default Manufacture;
