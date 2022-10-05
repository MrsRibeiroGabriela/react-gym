import "./Header.css";
import { useState } from "react";
import { Link } from "react-scroll";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className="header">
      <img src={Logo} alt="logo" className="logo" />
      {menuOpened === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={() => setMenuOpened(true)}
        >
          <img
            src={Bars}
            alt="menu em barras"
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link to='header'
            activeClass="active"
            onClick={() => setMenuOpened(false)}
            spy={true} smooth={true} >Home</Link>
          </li>
          <li >
            <Link to='programs'
            onClick={() => setMenuOpened(false)} spy={true} smooth={true}
            >Programas</Link>
          </li>
          <li>
            <Link to='reasons'
            onClick={() => setMenuOpened(false)}
            spy={true} smooth={true}>Razões</Link>
          </li>
          <li>
            <Link to='plans'
            onClick={() => setMenuOpened(false)}
            spy={true} smooth={true}>Planos</Link>
          </li>
          <li >
            <Link onClick={() => setMenuOpened(false)}to='testimonials' spy={true} smooth={true}>Testemunhos</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
