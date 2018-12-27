// Importing modules
import * as React from "react";

// Importing styling and static assets
import "./CreatorProjectGridDisplay.scss";
// import playButton from "./Icons/play-button.svg";
// import videoButton from "./Icons/video-player.svg";

import Cowsep from "./Images/Creators/cowsep.jpg";
import Eunkyung from "./Images/Creators/cute.jpg";
import Evos from "./Images/Creators/evos.png";
import Soyoung from "./Images/Creators/iu.png";
import Jihye from "./Images/Creators/khs.jpg";
import Bohye from "./Images/Creators/snsd.jpg";

import fb from "./Images/Projects/fantastic beast.jpg";
import iuconcert from "./Images/Projects/iuconcert.jpg";
import league from "./Images/Projects/league.jpg";
import lotr from "./Images/Projects/lotr.jpg";
import rockman from "./Images/Projects/rockman.jpg";
import rockman1 from "./Images/Projects/rockman1.jpg";

// Importing reduc and friends
// Importing react routering

// Importing UI elements
import ICreatorProjectBox from "./CreatorProjectBox/CreatorProjectBox";

// Importing interfaces
import {
  ICreatorProjectDisplayState,
  ICreatorProjectSet
} from "src/Interfaces/Interfaces";

const creatorsList: ICreatorProjectSet[] = [
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
    description:
      "She is as beautiful as the light of dawn, dazzling the eye of the commons.",
    highlight: false,
    image: Jihye,
    name: "Jihye Choi"
  },
  {
    description: "Bohye Kim is the best of the best. Her charms are endless.",
    highlight: false,
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

const projectsList: ICreatorProjectSet[] = [
  {
    description: "Good show",
    highlight: false,
    image: fb,
    name: "Fantastic Beast"
  },
  {
    description: "TBA",
    highlight: false,
    image: iuconcert,
    name: "IU concert"
  },
  {
    description:
      "The legends fight for honor and fame. The legends fight for honor and fame. The legends fight for honor and fame.",
    highlight: false,
    image: league,
    name: "League Worlds Championship"
  },
  {
    description:
      "The future of civilization rests in the fate of the One Ring. The future of civilization rests in the fate of the One Ring. ",
    highlight: false,
    image: lotr,
    name: "Lord of the rings"
  },
  {
    description: "TBA",
    highlight: false,
    image: rockman,
    name: "Super Rock"
  },
  {
    description: "TBA",
    highlight: false,
    image: rockman1,
    name: "Rockman Retro"
  }
];

export default class CreatorProjectGridDisplay extends React.Component<
  {},
  ICreatorProjectDisplayState
> {
  constructor(props: { imageOne: boolean }) {
    super(props);

    this.state = {
      currentDataSet: projectsList
    };
  }

  public setCreatorsList = () => {
    this.setState({
      currentDataSet: creatorsList
    });
  };

  public setProjectsList = () => {
    this.setState({
      currentDataSet: projectsList
    });
  };

  public render() {
    return (
      <div className="projectSection">
        <div className="tagContainer">
          <a className="singleTag" onClick={this.setProjectsList}>
            {/* <img src={videoButton} alt="" className="tagIcon" /> */}
            <h4 className="tagText text-white">Projects</h4>
          </a>
          <div className="hwDivider" />
          <a className="singleTag" onClick={this.setCreatorsList}>
            {/* <img src={playButton} alt="" className="tagIcon" /> */}
            <h4 className="tagText text-white">Creators </h4>
          </a>
        </div>
        <div className="creatorProjectContainer">
          {this.state.currentDataSet.map((unit, key) => {
            return (
              <ICreatorProjectBox dataSet={unit} id={`img${key}`} key={key} />
            );
          })}
        </div>
      </div>
    );
  }
}
