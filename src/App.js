import Main from "./components/Main";
import { Route, Routes } from "react-router-dom";
import Manufacture from "./components/Manufacture";

function App() {
  /*
    User would first land to Home page with navbar and about fixed.
    Inside main or body there would be Manufacture or User Button. 

   */
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/manufacture" element={<Manufacture />} />
      </Routes>
    </>
  );
}

export default App;
