import "./App.css";
import Navbar from "./Components/Navbar";

import * as React from "react";
import SimpleContainer from "./Components/SimpleContainer";
import InputForm from "./Components/InputForm";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <SimpleContainer />
      <InputForm />
      <Footer />
    </>
  );
}

export default App;
