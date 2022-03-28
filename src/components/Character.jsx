import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
//import propTypes from "prop-types";
import { setFavorite, deleteFavorite } from "../actions";
import "../assets/styles/components/Character.scss";
import { ReactComponent as SVGStar } from "../assets/static/icons/star.svg";
import CharacterDetail from "./CharacterDetail";
import Modal from "./Modal";

const Character = (props) => {
  const [modal, setModal] = useState(false);
  const [favorite, setFavorite] = useState(false);
  
  // props
  const { data } = props;
  const { id, image, name, status, gender, species } = data;

  const handleCloseModal = () => {

  };

  const handleOpenModal = () => {

  };

  const handleSetFavorite = () => {

  };

  const handleDeleteFavorite = () => {

  };

  useEffect(() => {

  }, []);

  return (
    <div className="character">
      <img className="character__img" src={image} alt="Character" />
      <div className="character__details">
        <h2 className="character__details-name">
          {name}
        </h2>
        {favorite ? 
          <SVGStar onClick={() => handleDeleteFavorite(id)} className="character__details-star favorite" /> :
          <SVGStar onClick={() => handleSetFavorite()} className="character__details-star noFavorite" />}
          <p
            className="character__details__item"
          >
            <span className="character__details__item-type">Status: </span>
            {status}
          </p>
      </div>
    </div>
  )


};

export default Character;
