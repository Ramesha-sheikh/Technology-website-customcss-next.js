import React from "react";
import Test from "@/components/Testimonaltwo/test"; // Correct path
import Testimonialtwo from "@/components/Testimonaltwo/text.module.css"; // Corrected CSS module import

const Hero2 = () => {
  const testimonialData = [
    {
      imageurl: "/21.png",
      heading: "Clever & Perceptive",
      para: `Aenean sed nibh a magna posuere tempor. Nunc 
              faucibus pellentesque nunc in aliquet. Donec 
              congue, nunc vel tempor congue, enim.`,
    },

    {
      imageurl: "/22.png",
      heading: "Porttitor Ultricies ",
      para: `Aenean sed nibh a magna posuere tempor. Nunc faucibus pellentesque 
nunc in aliquet. Donec congue, nunc vel tempor congue, enim. Nunc 
faucibus pellentesque nunc in aliquetonec congue.`,
    },
    {
      imageurl: "/23.png",
      heading: "Consectetur Consequat Pulvinar ",
      para: `Aenean sed nibh a magna posuere tempor. Nunc 
faucibus pellentesque nunc in aliquet. Donec 
congue, nunc vel tempor congue, enim.`,
    },
    {
      imageurl: "/24.png",
      heading: "Praesent Nulla Etiam ",
      para: `Aenean sed nibh a magna posuere tempor. Nunc 
faucibus pellentesque nunc in aliquet. Donec 
congue, nunc vel tempor congue, enim.`,
    },
 
 
  ];

  return (
    <>
      <div className={Testimonialtwo.container}>
        {/* Fixed Content */}
        <div className={Testimonialtwo.content}>
          <h1>What The Application Does</h1>
          <p>
            Aenean sed nibh a magna posuere tempor. Nunc faucibus pellentesque
            nunc in aliquet. Donec congue, nunc vel tempor congue, enim sapien
            lobortis ipsum, in volutpat sem ex in ligula.
          </p>
        </div>

        {/* Render the Cards dynamically */}
        <div className={Testimonialtwo.main}>
          {" "}
          {/* Correct class name here */}
          {testimonialData.map((testimonial, index) => (
            <Test
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

export default Hero2;
