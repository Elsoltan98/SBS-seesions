import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import CustomNavbar from "./Components/CustomNavbar";
import CustomHeader from "./Components/CustomHeader";
import Clients from "./Components/Clients";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <CustomNavbar />
      <CustomHeader />
      <Clients />
      <Footer />
    </>
  );
}

export default App;
