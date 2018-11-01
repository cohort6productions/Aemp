import React, { Component } from "react";
import Slider from "react-slick";

import "./HowToCarousel.scss";

import Picture from "./img/creator.jpg";

export default class SimpleSlider extends Component {
  public render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToScroll: 1,
      slidesToShow: 1,
      speed: 500
    };
    return (
      <div className="carousel">
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <img src={Picture} />
          </div>
          <div>
            <img src={Picture} />
          </div>
          <div>
            <img src={Picture} />
          </div>
          <div>
            <img src={Picture} />
          </div>
        </Slider>
      </div>
    );
  }
}
