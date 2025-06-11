import React from "react";
import { useNavigate } from "react-router-dom";

import "./style.css";
import { IoOpenOutline } from "react-icons/io5";
import { tours } from "../../tour_data";
import GTranslateWidget from "../lang";

const Tours = () => {
  const navigate = useNavigate();

  return (
    <section id="tours">
      {/* <GTranslateWidget /> */}

      <div className="cotainer">
        <h1 className="main_text">Tours</h1>
        <div className="tours_row">
          {tours.map((tour) => (
            <div
              key={tour.id}
              className="tour-card"
              onClick={() => navigate(`/tour/${tour.id}`)}
            >
              <img src={tour.img} alt={tour.name} />

              <h2 className="text-xl font-bold">
                <span>{tour.name}</span>{" "}
                <span>
                  <IoOpenOutline />
                </span>
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tours;
