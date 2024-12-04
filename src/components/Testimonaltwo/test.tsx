import React from "react";
import Testimonialtwo from "./text.module.css";
import Image from "next/image";

interface usercards {
  imageurl: string;
  heading: string;
  para: string;
}

const test = ({ imageurl, heading, para }: usercards) => {
  return (
    <div className={Testimonialtwo.cardcontainer}>
      <div className={Testimonialtwo.picture}>
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

export default test;

