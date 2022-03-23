import React, { useState, useEffect } from "react";
import axios from "axios";
import "../assets/styles/components/CharacterList.scss";
import Character from "./Character";
import Error from "./Error";
import Loader from "./Loader";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
  async function getCharacters() {

  };
  
  
  return <div>Hello am CharacterList!</div>;
};

export default CharacterList;
