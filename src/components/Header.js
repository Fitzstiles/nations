import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseFill } from "react-icons/ri";
import "./header.css";
import { Link } from "react-router-dom";

const Header = ({ toggle, setToggle }) => {
  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <img src="./images/logo.jpg" alt="" />
          </Link>
        </div>

        <div className="hamburger__menu" onClick={() => setToggle(!toggle)}>
          {toggle ? <RxHamburgerMenu /> : <RiCloseFill />}
        </div>
      </div>
      <div className="donate">
        <h2>
          <a href="/">DONATE</a> TO ANCYPIF TODAY
        </h2>
      </div>
    </header>
  );
};

export default Header;
