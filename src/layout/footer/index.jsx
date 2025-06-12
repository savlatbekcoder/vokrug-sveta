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
            <b>www.vokrug-sveta.uz</b> - 2025&copy;
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
