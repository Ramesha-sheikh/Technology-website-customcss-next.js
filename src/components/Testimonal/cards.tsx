import React from "react";
import Testimonial from "./cards.module.css";
import Image from "next/image";

interface usercards {
  imageurl: string;
  heading: string;
  para: string;
}

const Cards = ({ imageurl, heading, para }: usercards) => {
  return (
    <div className={Testimonial.cardcontainer}>
      <div className={Testimonial.picture}>
        <Image
          src={imageurl || "/default-image.png"} // Fallback image
          alt={heading}
          width={100}
          height={100}
        />
      </div>
      <h1>{heading}</h1>
      <p>{para}</p>
    </div>
  );
};

export default Cards;
