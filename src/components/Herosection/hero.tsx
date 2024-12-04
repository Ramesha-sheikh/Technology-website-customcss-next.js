import React from 'react';
import Herosection from './hero.module.css';
// import Image from 'next/image';

const Hero = () => {
  return (
    <div className={Herosection.section}>
      {/* Wrapper for the content to keep it above the overlay */}
      <div className={Herosection['content-wrapper']}>
        <div className={Herosection.maindiv}>
          <h1 className={Herosection.headingfirst}>
            Modern App For Smart And Modern People
          </h1>
          <p className={Herosection.para}>
            Aenean sed nibh a magna posuere tempor. Nunc faucibus pellentesque
            nunc in aliquet. Donec congue, nunc vel tempor congue, enim sapien
            lobortis ipsum, in volutpat sem ex in ligula.
          </p>
          <div className={Herosection.custombutton}>
            <button  className={Herosection.custombutton1}>Check options</button>
            <button className={Herosection.custombutton2}>Check prices</button>
          </div>
        </div>
      </div>
      <div className={Herosection.herosection2}>
     
      </div>
    </div>
  );
};

export default Hero;
