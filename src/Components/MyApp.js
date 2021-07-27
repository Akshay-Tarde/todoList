import React from "react";
import Navbar from "./Navbar";
import MainComponent from "./MainContent";
import Footer from "./Footer";

function MyApp() {
  return (
    <div>
      {" "}
      <Navbar />
      <MainComponent />
      <Footer />
    </div>
  );
}

export default MyApp;
