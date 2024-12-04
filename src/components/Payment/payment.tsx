import React from "react";
import Payment from "./payment.module.css";

interface usercards {
 topheading: string;
 price:string;
 para1:string;
 para2:string;
 para3:string;
 para4:string;
  buttontext: string;
 
}

const Cards = ({ topheading, price, para1,para2,para3,para4,buttontext}: usercards) => {
  return (
    <div className={Payment.cardcontainer}>
      <h1>{topheading }</h1>
      <h1>{ price}</h1>
      <p>{ para1}</p>
      <p>{ para2}</p>
      <p>{ para3}</p>
      <p>{ para4}</p>
      <button>{buttontext}</button>
    </div>
  );
};

export default Cards;
