import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
function Component() {
  const [num, setNum] = useState();
  const [name, setName] = useState();
  const [move, setMove] = useState();

  useEffect(() => {
    async function getData() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);

      console.log(res);
      setName(res.data.name);
      setMove(res.data.moves.length);
    }
    getData();
  });
  return (
    <div className="app">
      <div className="headings">
        <h1>
          You have to choose <span style={{ color: "red" }}>{num} value</span>{" "}
        </h1>
        <h1>
          My Name is <span style={{ color: "red" }}>{name}</span>
        </h1>
        <h1>
          I have <span style={{ color: "red" }}>{move} moves </span>
        </h1>
      </div>

      <select
        className="selectbox"
        value={num}
        onChange={(event) => {
          setNum(event.target.value);
        }}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="25">25</option>
      </select>
    </div>
  );
}

export default Component;
