import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseFill } from "react-icons/ri";
import "./header.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = ({ toggle, setToggle }) => {
  const useScroll = () => {
    const [state, setState] = useState({
      x: 0,
      y: 0,
    });
    const onScroll = () => {
      setState({ y: window.scrollY });
    };
    useEffect(() => {
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return state;
  };
  const { y } = useScroll();
  const contentClassname =
    y > 15 ? `header-container && lo` : "header-container";

  const donate = y > 15 ? `donate && margin` : "donate";
  return (
    <div className="mainHeader__container">
      <div className={contentClassname}>
        <div className="logo">
          <Link to="/">
            <img src="./images/logo.jpg" alt="" />
          </Link>
        </div>

        <div className="hamburger__menu" onClick={() => setToggle(!toggle)}>
          {toggle ? <RxHamburgerMenu /> : <RiCloseFill />}
        </div>
      </div>
      <div className={donate}>
        <p>
          <a href="/">DONATE</a> TO ANCYPIF TODAY
        </p>
      </div>
    </div>
  );
};

export default Header;
