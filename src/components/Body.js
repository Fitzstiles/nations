import About from "./About";
import "./body.css";
import Slider from "./Carousel";
import Contact from "./Contact";
import HeroSection from "./HeroSection";
const Body = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <Slider />
      <Contact />
    </div>
  );
};

export default Body;
