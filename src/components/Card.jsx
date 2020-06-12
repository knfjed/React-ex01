import React from "react";
import "./Card.css";

function Card({ img, title, subtitle, date, location, reference }) {
  return (
    <div className="Card">
      <div className="Topic">
        <img src={img} alt="観光地の写真" />
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <p>{date}</p>
      </div>
      <div className="Info">
        <p className="location">{location}</p>
        <p className="reference">{reference}</p>
      </div>
    </div>
  );
}
export default Card;
