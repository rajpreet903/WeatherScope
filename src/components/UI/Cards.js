import React from "react";
import css from "./card.module.css";
const Cards = (props) => {
   return <div className={css.card}>{props.children}</div>;
};

export default Cards;
