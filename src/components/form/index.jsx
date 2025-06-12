import React from "react";

import "./style.css";

const Form = () => {
  return (
    <form
      action="https://formspree.io/f/xzzgrvbp"
      className="pur_form"
      method="POST"
    >
      <h1>Order tour</h1>
      <input type="text" placeholder="Your Name" name="name" />
      <input type="email" placeholder="Your Email" name="email" />
      <input type="number" placeholder="Your Phone" name="phone" />
      <input type="number" placeholder="Your Card Number" name="card_number" />
      <div className="pur_row">
        <input type="number" placeholder="Expdate" name="card_number_exp" />
        <input type="number" placeholder="CVV" name="card_number_cvv" />
      </div>{" "}
      <button type="submit">Purchase</button>
    </form>
  );
};

export default Form;
