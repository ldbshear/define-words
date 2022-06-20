import "./App.css";
import Navbar from "./Components/Navbar";

import * as React from "react";
import SimpleContainer from "./Components/SimpleContainer";
import InputForm from "./Components/InputForm";

function App() {
  return (
    <>
      <Navbar />
      <SimpleContainer />
      <InputForm />
    </>
  );
}

export default App;
