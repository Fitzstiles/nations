// css styles is in the index.css file

import { IoMdCall } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { Link } from "react-router-dom";
const RightSection = ({ toggle, handleClosed }) => {
  const navigation = toggle
    ? "rightSection__container"
    : `${"rightSection__container"} && ${"active"}`;

  return (
    <div className={navigation}>
      <div className="contact_container">
        <div className="contact">
          <IoMdCall />
          <p>+234 9158623986</p>
        </div>
        <div className="contact">
          <MdOutlineMail /> 123@gmail.com
        </div>
      </div>

      <Link to="/" onClick={handleClosed}>
        Home
      </Link>
      <Link to="/ourmission" onClick={handleClosed}>
        Our Mission
      </Link>
      <Link to="/goals" onClick={handleClosed}>
        What we do
      </Link>
    </div>
  );
};

export default RightSection;
