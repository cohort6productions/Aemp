import React from "react";
import Slider from "react-slick";

import "./HowToCarousel.scss";

import HowToCard from "./HowToCard/HowToCard";

import Backer from "./img/backer.svg";
import Creator from "./img/creator.svg";
import Launch from "./img/launch.svg";
import Platform from "./img/platform.svg";

export default class HowToCarousel extends React.Component {
  public render() {
    const settings = {
      arrows: false,
      centerMode: true,
      centerPadding: "10%",
      className: "carousel",
      dots: true,
      infinite: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: false,
            slidesToShow: 1
          }
        }
      ],
      slidesToScroll: 1,
      slidesToShow: 1,
      speed: 500
    };
    return (
      <Slider {...settings}>
        <div>
          <HowToCard
            heading={"Creator"}
            subHeading={"Producers, Writers and Talents"}
            content={
              "List your media project or yourself as cast or crew. Start financing for your media project now! Or offer your talents as a potential cast member or crew."
            }
            picture={Creator}
          />
        </div>
        <div>
          <HowToCard
            heading={"Backers"}
            subHeading={"Producers, Individuals, Institutions, Funds"}
            content={
              "Follow and gain monitoring right as a token holder, giving the same transparency to progress as a co-producer and voting member with updates on milestones."
            }
            picture={Backer}
          />
        </div>
        <div>
          <HowToCard
            heading={"Monetization"}
            subHeading={"Media Acquisition, Streaming, Licensing"}
            content={
              "Earn or Contribute to AEMP utility token. Each media or talent listing earns you a token;or sign up to contribute to the AEMP token. Monitor and trade media asset tokens via blockchain for profit sharing or trading AEMP on an exchange."
            }
            picture={Platform}
          />
        </div>
        <div>
          <HowToCard
            heading={"AEMP"}
            subHeading={"Fee and Equity"}
            content={
              "AEMP gives utility token holders of AEMP token to contribute or participate in fractional ownership and co-producer rights to monitor, vote, and monetize each media asset."
            }
            picture={Launch}
          />
        </div>
      </Slider>
    );
  }
}
