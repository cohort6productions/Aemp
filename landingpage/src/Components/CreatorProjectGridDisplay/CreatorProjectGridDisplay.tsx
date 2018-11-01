// Importing modules
import * as React from "react";

// Importing styling and static assets
import "./CreatorProjectGridDisplay.scss";
import playButton from "./Icons/play-button.svg";
import videoButton from "./Icons/video-player.svg";
// Importing reduc and friends
// Importing react routering

// Importing UI elements
import ICreatorProjectBox from "./CreatorProjectBox/CreatorProjectBox";

// Importing interfaces
import { ICreatorProjectBoxProps } from "src/Interfaces/Interfaces";

const tempCreators: ICreatorProjectBoxProps[] = [
  { name: "Soyoung Kim", description: "TBA", image: "./Images/iu.png" },
  { name: "Eunkyung Shin", description: "TBA", image: "./Images/cute.jpg" },
  { name: "Johye Choi", description: "TBA", image: "./Images/khs.jpg" },
  { name: "Bohye Kim", description: "TBA", image: "./Images/snsd.jpg" },
  { name: "Cowsep", description: "TBA", image: "./Images/cowsep.jpg" },
  { name: "EVOS Gaming", description: "TBA", image: "./Images/evos.png" }
];

export default class CreatorProjectGridDisplay extends React.Component {
  public render() {
    return (
      <div className="projectSection">
        <div className="container">
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
