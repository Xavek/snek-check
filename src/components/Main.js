import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
// import Manufacture from "./Manufacture";
import Products from "../components/Products";
import connectToContract from "../utils/contract";
/*
  If the user clicks Manufacture then 
  load the manufacture component
  or if user clicks user then redirect to the body with registered products.
  If the user clicks to Manufacture button then it would be routed to the manufacture page.
  if the user clicks to user button then it would be routed to the products page.
 */
const Main = () => {
  // First run the useEffect and retrive the data.
  const [ourProduct, setProducts] = useState([]);
  const addProdContract = connectToContract(window.ethereum);
  const getProducts = async () => {
    if (addProdContract) {
      try {
        const products = await addProdContract.getProd();
        console.log("Getting Products", products);
        setProducts(products);
      } finally {
        console.log("Exit Try catch");
      }
    }
  };
  useEffect(() => getProducts(), [!!addProdContract]);
  return (
    <>
      <Header />
      <Link to="Manufacture">
        <button className="m-4 p-2">Manufacture</button>
      </Link>
      <Products products={ourProduct} />

      <Footer />
    </>
  );
};

export default Main;
