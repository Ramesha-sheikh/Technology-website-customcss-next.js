import React from 'react';
import Image from 'next/image';
import Employementhistory from '@/components/Employementhistory/employe.module.css'; // Correct import

const Employe = () => {
  return (
    <div className={Employementhistory.container}> {/* Apply styles using CSS module */}
       <Image
        src="/employment history.png"
        alt="Employment History"
        width={600}
        height={400}
        className={Employementhistory.pic}
      /> 
       <div>
         <div className={Employementhistory.text}>
          <h1>People Trust Us</h1>
          <p>Aenean sed nibh a magna posuere tempor. Nunc faucibus pellentesque nunc in aliquet. 
          Curabitur elementum nunc a leo imperdiet, nec elementum diam elementum. </p>
         </div>
         <div className={Employementhistory.picture}>
         <Image
        src="/netflix.png"
        alt="Employment History"
        width={600}
        height={400}
        className={Employementhistory.img}
      /> 
      <Image
        src="/hbo.png"
        alt="Employment History"
        width={600}
        height={400}
        className={Employementhistory.img}
      /> 
      <Image
        src="/etsy.png"
        alt="Employment History"
        width={600}
        height={400}
        className={Employementhistory.img}
      /> 
      <Image
        src="/kickstarter.png"
        alt="Employment History"
        width={600}
        height={400}
        className={Employementhistory.img}
      /> 
      <Image
        src="/WB.png"
        alt="Employment History"
        width={600}
        height={400}
        className={Employementhistory.img}
      /> 
         </div>
      </div>

    </div>
   
  );
};

export default Employe;
