import React from "react";
import { TypeAnimation } from "react-type-animation";

import "./style.css";

const Hero = () => {
  return (
    <>
      <div class="main">
        <div class="container text-center" data-aos="fade-up">
          <h1 class="text-white text-uppercase text-center">
            <span className="g-color">With Us -</span>
            <br />
            <span className="g-color">
              <TypeAnimation
                sequence={[
                  "A better and more budjet-friendly trip!",
                  1000,
                  "Reliable and more quality trip!",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Hero;
