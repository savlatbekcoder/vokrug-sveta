import { useState } from "react";
import phone from "../../assets/phone.png";
import logo from "../../logo.png";

import "./style.css";

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <header>
        <nav className="container">
          <div className="fmf" style={{ color: "transparent" }}>
            A.S
          </div>
          <div className="menu" onClick={handleToggle}>
            <h1>
              <img
                src={
                  open
                    ? `https://www.svgrepo.com/show/12848/x-symbol.svg`
                    : "https://freesvg.org/img/menu-icon.png"
                }
                width={"20px"}
                style={{ filter: "invert(100%)" }}
                alt=" menu"
              />
            </h1>
          </div>
          <div className="logo">
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className={`navigations ${open ? "open" : ""}`}>
            <a onClick={handleToggle} href="/#hero">
              Home page
            </a>
            <a onClick={handleToggle} href="/#about">
              About
            </a>
            <a onClick={handleToggle} href="/#tours">
              Tours
            </a>

            <a onClick={handleToggle} href="/#contacts">
              Contacts
            </a>
          </div>
          <div className="action">
            <a
              style={{
                textDecoration: "none",
                color: "#fff",
                marginRight: "10px",
              }}
              href="tel:902134450"
            >
              <img width={"30px"} src={phone} alt="phone" />
            </a>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
