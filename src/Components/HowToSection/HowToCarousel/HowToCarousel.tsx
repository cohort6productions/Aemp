import React from "react";
import Slider from "react-slick";

import "./HowToCarousel.scss";

import HowToCard from "./HowToCard/HowToCard";

import Backer from "./img/backer.png";
import Creator from "./img/creator.png";
import Launch from "./img/launch.png";
import Platform from "./img/platform.png";

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
              "List your media project or yourself as a Creator (producer, writer, cast, or crew). Start financing for your media project now! Or offer your talents as a potential cast member or crew on AEMP funded projects."
            }
            picture={Creator}
          />
        </div>
        <div>
          <HowToCard
            heading={"Backers"}
            subHeading={"Producers, Individuals, Institutions, Funds"}
            content={
              "Invest and monitor as a stakeholder, given the same transparency as a co-producer on milestones and certain voting rights."
            }
            picture={Backer}
          />
        </div>
        <div>
          <HowToCard
            heading={"Profit Participation"}
            subHeading={
              "AEMP automatically distributes cash from Streaming, Licensing, Ticket Sales, and Content Acquisition"
            }
            content={
              "Earn or Contribute to AEMP tokens. Each verified media or talent listing earns you a token.  Or register to contribute to AEMP tokens so you can access media projects on the AEMP exchange. Each successfully funded media project will have its own token listed on the AEMP exchange to monitor, trade, or collect distributions in your own wallet."
            }
            picture={Platform}
          />
        </div>
        <div>
          <HowToCard
            heading={"AEMP"}
            subHeading={"Fee and Equity"}
            content={
              "AEMP gives token holders a way contribute and participate in fractional stakes along with co-producer rights to monitor, vote, and profit from media assets."
            }
            picture={Launch}
          />
        </div>
      </Slider>
    );
  }
}
