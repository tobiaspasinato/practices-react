import { useState } from "react";
import ButtonBasic from "../components/ButtonBasic";
import AlertBasic from "../components/AlertBasic";

function Home() {
  const [showAlert, setShowAlert] = useState(false);

  function handleClick() {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 1500);
  }

  return (
    <div>
      <ButtonBasic onClick={handleClick}></ButtonBasic>
      {showAlert && <AlertBasic />}
    </div>
  );
}

/*
Cosas por preguntar o enontrar:
- el conceopto de handleClick
- como se entiende esto ({showAlert && <AlertBasic />})
- como funcionan los props en el ButtonBasic
*/

export default Home;
