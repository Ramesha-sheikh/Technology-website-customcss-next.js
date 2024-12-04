import React from "react";
import Cards from "@/components/Payment/payment"; // Correct path
import Payment from "@/components/Payment/payment.module.css"; // Corrected CSS module import

const Sectionthree = () => {
  const PaymentData = [
    {
      topheading: "Silver Plan",
      price: "$50",
      para1: "5 Gb Storage",
     para2:"5 Custom Emails",  
     para3:" 1 Common Database",     
     para4:"5 Custom Emails", 
   buttontext :"Check Options" ,  
    },
    {
        topheading: "Gold Plan",
        price: "$100",
        para1: "15 GB Storage",
        para2: "15 Custom Emails",
        para3: "15 Common Database",
        para4: "Backup & Restore Anytime",
       buttontext :"Check Options"   
      },
      {
        topheading: "Platinum Plan",
        price: "$200",
        para1: "Unlimited Storage",
        para2: "Unlimited Custom Emails",
        para3: "Unlimited Common Database",
        para4: "Backup & Restore Anytime",
          buttontext :"Check Options"   
      },
];

  return (
    <>
      <div className={Payment.container}>
        {/* Fixed Content */}
        <div className={Payment.content}>
          <h1>Payment Plan</h1>
          <p>
          Aenean sed nibh a magna posuere tempor. Nunc faucibus pellentesque 
          nunc in aliquet. Donec congue, nunc vel tempor congue, enim sapien.
          </p>
        </div>

        {/* Render the Cards dynamically */}
        <div className={Payment.main}>
          {" "}
          {/* Correct class name here */}
          {PaymentData.map((Payment, index) => (
            <Cards
              key={index} // Add a unique key for each card
              topheading={Payment.topheading}
              price={Payment.price}
             para1={Payment.para1}
             para2={Payment.para2}
             para3={Payment.para3}
             para4={Payment.para4}
            
             buttontext={Payment.buttontext}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Sectionthree;
