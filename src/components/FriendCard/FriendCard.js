import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div id={props.id} className="card img-container" onClick={() => props.handleIncrement(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default FriendCard;
