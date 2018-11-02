import React from "react";
import Slider from "react-slick";

import "./HowToCarousel.scss";

import HowToCard from "./HowToCard/HowToCard";

export default class HowToCarousel extends React.Component {
  public render() {
    const settings = {
      centreMode: true,
      centrePadding: "60px",
      className: "center carousel",
      dots: true,
      infinite: true,
      slidesToScroll: 1,
      slidesToShow: 1,
      speed: 500
    };
    return (
      <Slider {...settings}>
        <div className={"howToCard"}>
          <HowToCard
            heading={"Creator"}
            subHeading={"Producers, Writers and Talents"}
            content={
              "List your media project or yourself as cast or crew. Start financing for your media project now! Or offer your talents as a potential cast member or crew."
            }
          />
        </div>
        <div className={"howToCard"}>
          <HowToCard
            heading={"Backers"}
            subHeading={"Producers, Individuals, Institutions, Funds"}
            content={
              "Follow and gain monitoring right as a token holder, giving the same transparency to progress as a co-producer and voting member with updates on milestones."
            }
          />
        </div>
        <div className={"howToCard"}>
          <HowToCard
            heading={"Monetization"}
            subHeading={"Media Acquisition, Streaming, Licensing"}
            content={
              "Earn or Contribute to AEMP utility token. Each media or talent listing earns you a token;or sign up to contribute to the AEMP token. Monitor and trade media asset tokens via blockchain for profit sharing or trading AEMP on an exchange."
            }
          />
        </div>
        <div className={"howToCard"}>
          <HowToCard
            heading={"AEMP"}
            subHeading={"Fee and Equity"}
            content={
              "AEMP gives utility token holders of AEMP token to contribute or participate in fractional ownership and co-producer rights to monitor, vote, and monetize each media asset."
            }
          />
        </div>
      </Slider>
    );
  }
}
