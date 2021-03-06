import * as React from "react";
// import { Card, CardImg, CardSubtitle, CardTitle } from "reactstrap";

import "./TeamMember.scss";

// importing social icons
import facebook from "./Images/facebook.svg";
import instagram from "./Images/instagram.svg";
import linkedin from "./Images/linkedin.svg";
import twitter from "./Images/twitter.svg";

import { ITeamProps } from "src/Interfaces/Interfaces";

export default class TeamMember extends React.Component<ITeamProps, {}> {
  constructor(props: ITeamProps) {
    super(props);
  }
  public render() {
    return (
      <div className="memberCard">
        <div className="imgCont">
          <img className="memberImage" src={this.props.pictureLink} />
        </div>
        <div className="memberContent">
          <h4 className="memberName">{this.props.name}</h4>
          <p className="memberTitle">{this.props.title}</p>

          <div className="socialRow">
            {this.props.facebookLink && (
              <a href={this.props.facebookLink}>
                <img className="teamSocialIcon" src={facebook} />
              </a>
            )}
            {this.props.twitterLink && (
              <a href={this.props.twitterLink}>
                <img className="teamSocialIcon" src={twitter} />
              </a>
            )}
            {this.props.linkedinLink && (
              <a href={this.props.linkedinLink}>
                <img className="teamSocialIcon" src={linkedin} />
              </a>
            )}
            {this.props.instagramLink && (
              <a href={this.props.instagramLink}>
                <img className="teamSocialIcon" src={instagram} />
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }
}
