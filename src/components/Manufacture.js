import React, { useRef, useState } from "react";
/*
once the data is gone from here, then the loading spinner kind of thiogs could be added.
then the data would go to wite upon the blockchain.
then th data would be populated at the products place.
 */
const Manufacture = () => {
  const [ethereumAcc, setEthereumAcc] = useState(undefined);
  const refprodName = useRef(null);
  const reforgnConty = useRef(null);
  const refunqId = useRef(null);

  /*This basically handles the form elements.
  It handles all the input fields and prepares to send over the blockchain
  */
  const handleSubmit = (e) => {
    e.preventDefault();
    const prodName = refprodName.current.value;
    const orgnConty = reforgnConty.current.value;
    const uniqueId = refunqId.current.value;
    refprodName.current.value = "";
    reforgnConty.current.value = "";
    refunqId.current.value = "";
    console.log({ prodName, orgnConty, uniqueId });
  };
  /*
  THis would handle the logic to connect to wallet metamask.
   */
  const connectMetaMask = async () => {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });
      setEthereumAcc(accounts);
      console.log("The Acc is:", ethereumAcc);
    } else {
      alert("Install Metamask");
    }
  };

  return (
    <>
      {/* This div would would be the container for the p tag with the Register your Products. */}
      <div>
        <h4>Add Your Product to Decentralized Database.</h4>
        <p>First You need to connect to the Metamask</p>
      </div>
      {/* This div would contain the form element  */}
      <div>
        {/* This div would conect to the metamask */}
        <div>
          <button onClick={connectMetaMask}>Connect to Metamask</button>
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
