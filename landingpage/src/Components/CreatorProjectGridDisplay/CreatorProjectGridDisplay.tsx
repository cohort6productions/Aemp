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
import Johye from "./Images/khs.jpg";
import Bohye from "./Images/snsd.jpg";

// Importing reduc and friends
// Importing react routering

// Importing UI elements
import ICreatorProjectBox from "./CreatorProjectBox/CreatorProjectBox";

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
    image: Johye,
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
          <div className="singleTag">
            <img src={playButton} alt="" className="tagIcon" />
            <span className="tagText">Creators </span>
          </div>
          <div className="singleTag">
            <img src={videoButton} alt="" className="tagIcon" />
            <span className="tagText">Projects</span>
          </div>
        </div>
        <div className="creatorProjectContainer">
          {tempCreators.map((creator, i) => {
            return <ICreatorProjectBox {...creator} key={i} />;
          })}
        </div>
      </div>
    );
  }
}
