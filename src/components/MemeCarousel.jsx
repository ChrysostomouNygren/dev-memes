import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { memes } from "../components/memes.json";
import "../styles/memeCarousel.css"


function MemeCarousel() {
  const randomMemeArray = memes.sort(() => Math.random() - 0.5);
  return (
    <div className="carouselBox">
      <Carousel variant="dark">
        {randomMemeArray.map((item) => (
          <Carousel.Item>
            <img src={item.url} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default MemeCarousel;
