import React from "react";
import Aboutcards from "./cards.module.css"; // Importing the CSS module

interface Usercards {
  count: number;
  heading: string;
  para: string;
}

const Cards = ({ count, heading, para }: Usercards) => {
  return (
    <div className={Aboutcards.cardcontainer}>
      <h1>{count}</h1>
      <h2>{heading}</h2>
      <p>{para}</p>
    </div>
  );
};

export default Cards;
