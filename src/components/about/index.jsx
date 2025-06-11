import React from "react";
import logo from "./logo.png";

import "./style.css";

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <h1 className="main_text">About us</h1>
        <div className="row">
          <div className="side">
            <img src={logo} alt="" />
          </div>
          <div className="side">
            <h2>
              <b>Company name:</b> Vokrug Sveta
            </h2>
            <h2>
              <b>Company head:</b> Kimdur Kimdurov Kimdur o'g'li
            </h2>
            <h2>
              <b>Founded:</b> Iyul 2025
            </h2>
            <h2>
              <b>Legal form:</b> Limited liability company
            </h2>
            <h2>
              <b>Location:</b> Republic of Uzbekistan
            </h2>
            <h2>
              <b>Address:</b> D. Zakirova Street, Building 2, 5, Samarkand,
              Uzbekistan
            </h2>
            <h2>
              <b>Activity:</b> Outbound travel company License for tourism
            </h2>
          </div>
        </div>
        <br />
        <p>
          License for tourism activities:
          <br />
          <br />
          Our company was founded in 2025 by specialists in the tourism industry
          of the Central Asian regions and we are a young but very fast-growing
          company, our team is a team of experienced professionals who will be
          at your disposal during your trip. We can offer tailor-made tours for
          both group travelers and individual travelers, we offer reliable
          transport services and the best hotels with a wide range of options
          for tourist recreation. Our concept is to appoint an exclusive
          Incoming Travel company partner in each country to offer a wide range
          of services and provide quality tours along the Great Silk Road, as
          well as individual travel services. Currently, we are working with
          professional partners in many countries and regions of Central Asia,
          such as Kazakhstan, Kyrgyzstan, Tajikistan, Turkmenistan and Iran.
          <br />
          <br />
          At the moment, we have a representative office and head office in
          Samarkand, but we do not intend to limit ourselves to our
          achievements, but next year we will open representative offices in
          Bukhara, Khiva and Nukus, which will help us maintain our service at
          the level of our quality and guarantee travelers the best pleasure
          during their trip. Try to use our service and a long-term stay with us
          is guaranteed!!!
          <br />
          <br />
          Feel the breeze of history and real presence with us!!!
        </p>
      </div>
    </section>
  );
};

export default About;
