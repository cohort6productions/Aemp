import React from "react";
import Slider from "react-slick";

import "./HowToCarousel.scss";

import Picture from "./img/creator.jpg";

export default class HowToCarousel extends React.Component {
  public render() {
    const settings = {
      centreMode: true,
      centrePadding: "60px",
      className: "center",
      dots: true,
      infinite: true,
      slidesToScroll: 1,
      slidesToShow: 3,
      speed: 500
    };
    return (
      <Slider {...settings}>
        <div>
          <img className={"sliderImage"} src={Picture} />
        </div>
        <div>
          <img className={"sliderImage"} src={Picture} />
        </div>
        <div>
          <img className={"sliderImage"} src={Picture} />
        </div>
        <div>
          <img className={"sliderImage"} src={Picture} />
        </div>
      </Slider>
    );
  }
}
