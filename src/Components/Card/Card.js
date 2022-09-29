import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Card.css";

const Card = ({ card, handleAddToList }) => {
  const { img, name, time } = card;
  return (
    <div className="card">
      <img src={img} alt="" />
      <div className="card-info">
        <h4 className="card-name">{name}</h4>
        <p>Time required : {time}s</p>
      </div>
      <div className="button">
        <button
          onClick={() => {
            handleAddToList(card);
          }}
          className="btn-cart"
        >
          <p className="btn-text">Add to list</p>
        </button>
      </div>
    </div>
  );
};

export default Card;
