import About from "./About";
import "./body.css";
import Contact from "./Contact";
const Body = () => {
  return (
    <div>
      <div className="img__container">
        <img
          src="https://i0.wp.com/epthinktank.eu/wp-content/uploads/2019/04/eprs-briefing-635544-deliveries-youth-empowerment-final.jpg?fit=1000%2C666&ssl=1"
          alt=""
        />
      </div>
      <About />
      <Contact />
    </div>
  );
};

export default Body;
