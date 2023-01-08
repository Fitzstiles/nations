import About from "./About";
import "./body.css";
import Slider from "./Carousel";
import Contact from "./Contact";
import HeroSection from "./HeroSection";
const Body = () => {
  return (
    <div className="body__container">
      <div className="img__container">
        <HeroSection />
      </div>
      <About />
      <Slider />
      <Contact />
    </div>
  );
};

export default Body;
