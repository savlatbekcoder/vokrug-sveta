import { useEffect, useState } from "react";

import { FaArrowUp } from "react-icons/fa";

import "./style.css";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <div>
      <button
        onClick={scrollToTop}
        className={`back_button ${
          isVisible ? "show_back_button" : "hide_back_button"
        }`}
      >
        <FaArrowUp />
      </button>
    </div>
  );
};

export default BackToTop;
