import React, { useState } from "react";
import "./index.css";
import Background from "./components/Background";
import Title from "./components/Title";
import Form from "./components/Form";
import Ticket from "./components/Ticket";

function App() {
  const [userData, setUserData] = useState(null);

  return (
    <>
      <Background>
        {!userData ? (
          <Form setUserData={setUserData} />
        ) : (
          <Ticket {...userData} />
        )}
      </Background>
    </>
  );
}

export default App;
