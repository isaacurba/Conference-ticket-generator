import React from "react";
import "./index.css";
import Background from "./components/Background";
import Title from "./components/Title";
import Form from "./components/Form";


function App() {
  return (
    <>
      <Background>
        <Title />
        <Form />
      </Background>
    </>
  );
}

export default App;
