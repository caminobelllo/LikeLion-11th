import React from "react";
import "./Homepage.css";

function Homepage(props) {
  return (
    <div className="roomElement">
      <div className="header">
        <div className="location">{props.location}</div>
        <div className="rating">{props.rating}</div>
      </div>
      <div className="distance">{props.distance}</div>
      <div className="date">{props.date}</div>
      <div className="price">{props.price}</div>
    </div>
  );
}

export default Homepage;
