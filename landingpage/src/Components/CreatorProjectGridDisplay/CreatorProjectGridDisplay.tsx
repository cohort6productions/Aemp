// Importing modules
import * as React from "react";

// Importing styling and static assets
import "./CreatorProjectGridDisplay.scss";
import playButton from "./Icons/play-button.svg";
import videoButton from "./Icons/video-player.svg";

import Cowsep from "./Images/cowsep.jpg";
import Eunkyung from "./Images/cute.jpg";
import Evos from "./Images/evos.png";
import Soyoung from "./Images/iu.png";
import Jihye from "./Images/khs.jpg";
import Bohye from "./Images/snsd.jpg";

// Importing reduc and friends
// Importing react routering

// Importing UI elements
// import ICreatorProjectBox from "./CreatorProjectBox/CreatorProjectBox";

// Importing interfaces
import { ICreatorProjectBoxProps } from "src/Interfaces/Interfaces";

const tempCreators: ICreatorProjectBoxProps[] = [
  {
    description: "TBA",
    highlight: false,
    image: Soyoung,
    name: "Soyoung Kim"
  },
  {
    description: "TBA",
    highlight: false,
    image: Eunkyung,
    name: "Eunkyung Shin"
  },
  {
    description: "TBA",
    highlight: true,
    image: Jihye,
    name: "Jihye Choi"
  },
  {
    description: "TBA",
    highlight: true,
    image: Bohye,
    name: "Bohye Kim"
  },
  {
    description: "TBA",
    highlight: false,
    image: Cowsep,
    name: "Cowsep"
  },
  {
    description: "TBA",
    highlight: false,
    image: Evos,
    name: "EVOS Gaming"
  }
];

export default class CreatorProjectGridDisplay extends React.Component {
  public render() {
    return (
      <div className="projectSection">
        <div className="tagContainer">
          <a href={"./"} className="singleTag">
            <img src={playButton} alt="" className="tagIcon" />
            <h3 className="tagText text-white">Creators </h3>
          </a>
          <a href="./" className="singleTag">
            <img src={videoButton} alt="" className="tagIcon" />
            <h3 className="tagText text-white">Projects</h3>
          </a>
        </div>
        <div className="creatorProjectContainer">
          <div className="gridBox" id="img1">
            <img src={tempCreators[0].image} alt="" className="boxImage" />
          </div>
          <div className="gridBox" id="img2">
            <img src={tempCreators[1].image} alt="" className="boxImage" />
          </div>
          <div className="gridBox" id="img3">
            <img src={tempCreators[2].image} alt="" className="boxImage" />
          </div>
          <div className="gridBox" id="img4">
            <img src={tempCreators[3].image} alt="" className="boxImage" />
          </div>
          <div className="gridBox" id="img5">
            <img src={tempCreators[4].image} alt="" className="boxImage" />
          </div>
          <div className="gridBox" id="img6">
            <img src={tempCreators[5].image} alt="" className="boxImage" />
          </div>
        </div>
      </div>
    );
  }
}
