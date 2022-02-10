import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
// import Manufacture from "./Manufacture";
/*
  If the user clicks Manufacture then 
  load the manufacture component
  or if user clicks user then redirect to the body with registered products.
  If the user clicks to Manufacture button then it would be routed to the manufacture page.
  if the user clicks to user button then it would be routed to the products page.
 */
const Main = () => {
  // const [accounts, setAccounts] = useState(undefined)

  return (
    <>
      <Header />
      <Link to="Manufacture">
        <button>Manufacture</button>
      </Link>
      <Link to="user">
        <button>User</button>
      </Link>

      <Footer />
    </>
  );
};

export default Main;
