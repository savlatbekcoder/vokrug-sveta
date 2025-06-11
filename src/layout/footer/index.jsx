import "./style.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-row container">
        <div>
          <img src="/logo.png" alt="" />
        </div>
        <span>
          <span>
            <b>savlatbekcoder.uz</b> - 2024&copy;
          </span>
          <span>
            {" "}
            - made by{" "}
            <a style={{ color: "#fff" }} href="https://t.me/savlatbek_coder">
              <b>Savlatbek</b>
            </a>
          </span>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
