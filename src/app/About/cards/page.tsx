import React from "react";
import Cards from "@/components/Aboutcards/cards"; // Correct path
import Aboutcards from "@/components/Aboutcards/cards.module.css"; // Corrected CSS module import

const Sectionthree = () => {
  const CardData = [
    {
      count: 23, // Changed to number
      heading: "Honors Received",
      para: `Aenean sed nibh a magna 
posuere tempor nunc faucibus 
pellentesque nunc in aliquet.`,
    },
    {
      count: 52, // Changed to number
      heading: "Pleased Customers",
      para: `Sedenean sed nibh a magna 
posuere tempor nunc faucibus 
pellentesque nunc.`,
    },
    {
      count: 214, // Changed to number
      heading: "Finished Projects",
      para: `Pellentesque nunc in aliquet. 
Donec congue, nunc vel tempor 
congue.`,
    },
    {
      count: 91, // Changed to number
      heading: "Observations Made",
      para: `Nunc in aliquet, donec 
congue, nunc vel tempor congue 
vel tempor congue.`,
    },
  ];

  return (
    <>
      <div className={Aboutcards.container}>
        {/* Fixed Content */}
        {/* <div className={Aboutcards.content}>
          <h1>Payment Plan</h1>
          <p>
            Aenean sed nibh a magna posuere tempor. Nunc faucibus pellentesque
            nunc in aliquet. Donec congue, nunc vel tempor congue, enim sapien.
          </p>
        </div> */}

        {/* Render the Cards dynamically */}
        <div className={Aboutcards.main}>
          {CardData.map((card, index) => (
            <Cards
              key={index} // Add a unique key for each card
              count={card.count} // Correctly pass the count
              heading={card.heading} // Correctly pass the heading
              para={card.para} // Correctly pass the para
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Sectionthree;
