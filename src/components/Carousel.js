import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./slider.css";

export default function Slider() {
  const images = [
    {
      image: "../images/01.jpg",
    },
    {
      image: "../images/02.jpg",
    },
    {
      image: "../images/03.jpg",
    },
    {
      image: "../images/04.jpg",
    },
    {
      image: "../images/05.jpg",
    },
    {
      image: "../images/06.jpg",
    },
    {
      image: "../images/07.jpg",
    },
    {
      image: "../images/08.jpg",
    },
    {
      image: "../images/09.jpg",
    },
    {
      image: "../images/11.jpg",
    },
  ];
  return (
    <>
      <h3 className="header">HOW FAR WE HAVE GONE</h3>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        interval={2500}
        showStatus={false}
        showIndicators={false}
        className="main__slide"
      >
        {images.map((img) => (
          <div>
            <img src={img.image} alt="" />
          </div>
        ))}
      </Carousel>
    </>
  );
}
