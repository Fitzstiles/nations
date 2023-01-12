import "./body.css";
const HeroSection = () => {
  return (
    <div className="hero__container">
      <div className="bg__img">
        <img
          src="https://perspektiva4youth.files.wordpress.com/2014/12/kids-hands-holding-plants_blog.jpg"
          alt=""
        />
      </div>
      <div className="text__container">
        <div className="text__area">
          <p>
            Weather you plant or you water, <br /> At <span>ANCYPIF</span>{" "}
            transforming and raising youths through empowerment and royal
            priesthood is the goal
          </p>
          <a href="/">Donate</a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
