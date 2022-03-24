import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { setFavorite, deleteFavorite } from "../actions";
import "../assets/styles/components/Character.scss";
import { ReactComponent as SVGStar } from "../assets/static/icons/star.svg";
import CharacterDetail from "./CharacterDetail";
import Modal from "./Modal";

const Character = () => {
  const [modal, setModal] = useState(false);
  const [favorite, setFavorite] = useState(false);
  
  return <div>Hello am Character!</div>;
};

export default Character;
