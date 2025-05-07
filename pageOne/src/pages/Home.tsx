import { useState } from "react";
import ButtonBasic from "../components/ButtonBasic";
import InputBasic from "../components/InputBasic";
import "./Home.css"

function Home() {
  const [inputValue, setInputValue] = useState("");
  const [namePokemon, setNamePokemon] = useState("");
  const [idPokemon, setIdPokemon] = useState(0);
  const [imgPokemon, setImgPokemon] = useState("");



  function handleClick() {
    fetch("https://pokeapi.co/api/v2/pokemon/" + inputValue)
    .then((response) => {
      return response.json();
    }).then(
      (data) => {
        setNamePokemon(data.name);
        setIdPokemon(data.id);
        setImgPokemon(data.sprites.front_default);
      }).catch((error) => {
        console.error("Error fetching data:", error);
        setNamePokemon("No se encontró el Pokémon");
        setIdPokemon(0);
        setImgPokemon("");
      }
    )
  }

  return (
    <div id="home">
      <InputBasic value={inputValue} setInputValue={setInputValue}/>
      <ButtonBasic className="bton" onClick={handleClick}></ButtonBasic>
      <h1>
        {namePokemon}
      </h1>
      <h2>
        {idPokemon}
      </h2>
      <img id="imgPokemon" src={imgPokemon}/>
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
