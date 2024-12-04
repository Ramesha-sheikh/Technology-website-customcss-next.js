import React from "react";
import Cards from "@/components/Testimonal/cards"; // Correct path
import Testimonial from "@/components/Testimonal/cards.module.css"; // Corrected CSS module import

const Page = () => {
  const testimonialData = [
    {
      imageurl: "/1.png",
      heading: "Clever & Perceptive",
      para: `Aenean sed nibh a magna posuere tempor. Nunc 
              faucibus pellentesque nunc in aliquet. Donec 
              congue, nunc vel tempor congue, enim.`,
    },

    {
      imageurl: "/2.png",
      heading: "Clever & Perceptive",
      para: `Aenean sed nibh a magna posuere tempor. Nunc 
faucibus pellentesque nunc in aliquet. Donec 
congue, nunc vel tempor congue, enim.`,
    },
    {
      imageurl: "/3.png",
      heading: "Knowledgeable & Witty",
      para: `Aenean sed nibh a magna posuere tempor. Nunc 
faucibus pellentesque nunc in aliquet. Donec 
congue, nunc vel tempor congue, enim.`,
    },
    {
      imageurl: "/4.png",
      heading: "Intelligent & Perspective",
      para: `Aenean sed nibh a magna posuere tempor. Nunc 
faucibus pellentesque nunc in aliquet. Donec 
congue, nunc vel tempor congue, enim.`,
    },
    {
      imageurl: "/5.png",
      heading: "Sensible & Astute",
      para: `Aenean sed nibh a magna posuere tempor. Nunc 
faucibus pellentesque nunc in aliquet. Donec 
congue, nunc vel tempor congue, enim.`,
    },
    {
      imageurl: "/6.png",
      heading: "Innovative",
      para: `Aenean sed nibh a magna posuere tempor. Nunc 
faucibus pellentesque nunc in aliquet. Donec 
congue, nunc vel tempor congue, enim.`,
    },
  ];

  return (
    <>
      <div className={Testimonial.container}>
        {/* Fixed Content */}
        <div className={Testimonial.content}>
          <h1>The Location Where Your Mobile Application Should Be</h1>
          <p>
            Aenean sed nibh a magna posuere tempor. Nunc faucibus pellentesque
            nunc in aliquet. Donec congue, nunc vel tempor congue, enim sapien
            lobortis ipsum, in volutpat sem ex in ligula.
          </p>
        </div>

        {/* Render the Cards dynamically */}
        <div className={Testimonial.main}>
          {/* {" "} */}
          {/* Correct class name here */}
          {testimonialData.map((testimonial, index) => (
            <Cards
              key={index} // Add a unique key for each card
              imageurl={testimonial.imageurl}
              heading={testimonial.heading}
              para={testimonial.para}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
