import React from "react";
import "./Carousel.css";

import { SLIDES } from "../../utils/carouselData";
import ImageSlider from "../ImageSlider/ImageSlider";

const Carousel = () => {
  return (
    <div className="carousel-container">
      <ImageSlider data={SLIDES[0].slides} />
    </div>
  );
};

export default Carousel;
