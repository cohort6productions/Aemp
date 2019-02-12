import React from "react";
import Slider from "react-slick";

import "./HowToCarousel.scss";

import HowToCard from "./HowToCard/HowToCard";

import AEMP from "./img/MK.190210.AEMP.WEBW.AEMPParticipation.png";
import Backer from "./img/MK.190210.AEMP.WEBW.Backers.png";
import Creator from "./img/MK.190210.AEMP.WEBW.CreatorShareVision.png";
import Freedom from "./img/MK.190210.AEMP.WEBW.InvestmentFreedom.png";
import Profit from "./img/MK.190210.AEMP.WEBW.ProfitParticipation.png";

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
                        subHeading={"Share and nurture your vision and talents"}
                        content={
                            "Start showcasing and crowdfunding your media project with a vision, or participate in other successfully funded projects to show the world what you are capable of doing."
                        }
                        picture={Creator}
                    />
                </div>
                <div>
                    <HowToCard
                        heading={"Backers"}
                        subHeading={
                            "Support your favourite projects and creators with a promise"
                        }
                        content={
                            "Invest while monitor progress through our dashboard, we offer our backers highest transparency and control, making sure that our backers are most comfortable with their decisions."
                        }
                        picture={Backer}
                    />
                </div>
                <div>
                    <HowToCard
                        heading={"Profit Participation"}
                        subHeading={
                            "Participate in the success of your favourite projects"
                        }
                        content={
                            "AEMP automatically reward backers with revenues and profits from successfully funded media projects. AEMP is a strong believer in sharing successes and growing together."
                        }
                        picture={Profit}
                    />
                </div>
                <div>
                    <HowToCard
                        heading={"Investment Freedom"}
                        subHeading={
                            "Gain financial flexibility without extra fees"
                        }
                        content={
                            "Earn and contribute in AEMP tokens either through successful funded media project or verified talent listing. AEMP tokens allow users to track, trade and collect gains through your own wallet without incurring transaction fees."
                        }
                        picture={Freedom}
                    />
                </div>
                <div>
                    <HowToCard
                        heading={"AEMP Participation"}
                        subHeading={"Be part of the projects through AEMP"}
                        content={
                            "AEMP gives token holders a way contribute and participate in fractional stakes along with co-producer, giving backers rights to monitor, vote, and even profit from projects they’ve trusted and funded."
                        }
                        picture={AEMP}
                    />
                </div>
            </Slider>
        );
    }
}
