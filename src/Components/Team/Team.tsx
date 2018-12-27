import * as React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import "./Team.scss";

import { ITeamProps } from "src/Interfaces/Interfaces";

import jason from "./Images/a.jpg";
import minsoo from "./Images/b.jpg";
import reid from "./Images/c.jpg";
import steve from "./Images/d.jpg";
import TeamMember from "./TeamMember/TeamMember";

// Declaring variables
const headerContent = {
  header: "Our Team",
  subHeader: `Meet our core team`
};

const tempTeamInfo: ITeamProps[] = [
  {
    facebookLink: "2",
    instagramLink: "1",
    linkedinLink: "1",
    name: "Minsoo Kim",
    pictureLink: minsoo,
    title: "Founder and CEO",
    twitterLink: "1"
  },
  {
    facebookLink: "123",
    instagramLink: "123",
    linkedinLink: "123",
    name: "Reid Frasier",
    pictureLink: reid,
    title: "CTO",
    twitterLink: "123"
  },
  {
    facebookLink: "123",
    instagramLink: "123",
    linkedinLink: "123",
    name: "Dave Chang",
    pictureLink: jason,
    title: "COO",
    twitterLink: "123"
  },
  {
    facebookLink: "123",
    instagramLink: "123",
    linkedinLink: "123",
    name: "Steve Nelson",
    pictureLink: steve,
    title: "General Counsel",
    twitterLink: "123"
  }
];

export default class Team extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
  }
  public render() {
    return (
      <div className="teamHorizontalSection">
        <SectionHeader {...headerContent} />
        <div className="memberGrid">
          {tempTeamInfo.map((member, i) => {
            return <TeamMember {...member} key={i} />;
          })}
        </div>
      </div>
    );
  }
}
