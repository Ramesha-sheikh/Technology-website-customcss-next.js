import React from "react";
import Image from "next/image";
import Contactform from "./contactfor.module.css";

const Contactuser = () => {
  return (
    <div className={Contactform.container}>
      {/* Image Section */}
      <div className={Contactform.imageWrapper}>
        <Image
          src="/contactimg.png"
          alt="Contact Image"
          width={600}
          height={400}
        />
      </div>

      {/* Form Section */}
      <form className={Contactform.form}>
        <h1>Please Get In Touch With Us!</h1>
        <label className={Contactform.label}>Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          className={Contactform.input}
        />

        <label className={Contactform.label}>Your Email Address</label>
        <input
          type="email"
          placeholder="Enter your email"
          className={Contactform.input}
        />

        <label className={Contactform.label}>Topic</label>
        <input
          type="text"
          placeholder="Enter the topic"
          className={Contactform.input}
        />

        <label className={Contactform.label}>Your Message</label>
        <textarea
          placeholder="Write your message"
          className={Contactform.textarea}
        ></textarea>

        <button type="submit" className={Contactform.button}>
          Send
        </button>
      </form>
    </div>
  );
};

export default Contactuser;
