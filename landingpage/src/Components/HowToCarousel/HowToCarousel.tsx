import * as React from "react";
import Slider from "react-slick";

import { Row } from "reactstrap";

import Picture from "./img/creator.jpg";

export default class HowToCarousel extends React.Component {
  public render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToScroll: 1,
      slidesToShow: 1,
      speed: 500
    };
    return (
      <div className="slider">
        <h2> Single Item</h2>
        <Slider {...settings}>
          <Row>
            <div className="howToCards">
              <img src={Picture} style={{ height: "100px" }} />
            </div>
            <div className="howToCards">
              <img src={Picture} style={{ height: "100px" }} />
            </div>
            <div className="howToCards">
              <img src={Picture} style={{ height: "100px" }} />
            </div>
            <div className="howToCards">
              <img src={Picture} style={{ height: "100px" }} />
            </div>
            <div className="howToCards">
              <img src={Picture} style={{ height: "100px" }} />
            </div>
          </Row>
        </Slider>
      </div>
    );
  }
}
