import React from "react";
import styles from './downloadapp.module.css'; 
import Image from 'next/image'

const Downloadapp = () => {
  return (
    <>
      <div className={styles.main}>  
        <div className={styles.content}>
        <h1>Download App</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis
          risus mi. Ut placerat quam lectus. Curabitur dictum velit non lacus
          ornare tempor. Nullam quis augue in leo aliquet malesuada sit amet
          eget eros. Sed laoreet posuere velit sit amet varius. Nulla eget purus
          non erat fringilla sodales vel a nulla. Cras sit amet tempus risus.
          Fusce dignissim blandit justo, eget elementum risus tristique a. Nunc
          fringilla lacus lacus, sit amet accumsan est pulvinar non. Praesent
          tristique enim lorem. Phasellus a auctor lacus. Proin vitae accumsan
          nunc.
        </p>
        <div className={styles.buttons}>
          <button>
          <Image
           src="/button1.png"
            alt="Button Image"
            width={200}
            height={200}

            />
          </button>
          <button>
            <Image
            src="/button2.png"
            alt="Button Image"
            width={200}
            height={200}

            />
            
          </button>
        </div>
      </div>
      </div>
    </>
  );
};

export default Downloadapp;
