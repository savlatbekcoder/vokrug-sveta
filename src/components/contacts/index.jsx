import React from "react";

const Contacts = () => {
  return (
    <section id="contacts">
      <div className="cotainer">
        <h1 className="main_text">Contacts</h1>
        <div className="row">
          <div className="side">
            <h2>Contact us</h2>
            <br />
            <p>
              <b>Address:</b> <br /> D. Zakirova Street, Building 2, 5,
              Samarkand, Uzbekistan
            </p>
            <br />

            <p>
              <b>Call:</b> <br /> +998 90 213 44 50
            </p>
            <br />

            <p>
              <b>Email:</b> <br /> vokrug_sveta8@mail.ru
            </p>
            <br />
            <p>
              <b>Opening hours:</b> <br />
              Monday to Saturday, 10:00 - 18:00 <br />
              Sunday closed <br />
              12:30 - 13:30 lunch time
            </p>
          </div>
          <div className="side">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d699.8423649208604!2d69.22085823635665!3d41.276487167037494!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a6a0c687d39%3A0x40377f59933b5bac!2sChapanata%20Street%2058%2C%20100115%2C%20Tashkent%2C%20Uzbekistan!5e1!3m2!1sen!2sus!4v1723804280631!5m2!1sen!2sus"
              width={600}
              height={340}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
