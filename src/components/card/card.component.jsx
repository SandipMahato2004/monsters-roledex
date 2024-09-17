import React from "react";

import "./card.styles.css"
export const Card = (props) =>(
  <div className="card-container">
    <img src={`https://robohash.org/${props.monster.name}size=180×180`}alt="monster" />
    <h2>{props.monster.name}</h2>
    <p>{props.monster.email}</p>
    </div>
)
  