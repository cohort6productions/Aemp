import * as React from "react";
import { Col, Row } from "reactstrap";
import SectionHeader from "../SectionHeader/SectionHeader";
import "./Team.scss";

// import { ITeamProps } from "src/Interfaces/Interfaces";
// import TeamMember from './TeamMember/TeamMember';

import jason from "./Images/jason.jpg";
import minsoo from "./Images/minsoo.jpg";
import reid from "./Images/reid.jpg";
import steve from "./Images/steve.jpg";
import TeamMember from "./TeamMember/TeamMember";

// Declaring variables
const headerContent = {
  header: "Our Team",
  subHeader: `Meet our amazing team members who made all this possible`
};

// const tempTeamInfo: ITeamProps[] = [
//   {
//     facebookLink: "2",
//     instagramLink: "1",
//     linkedinLink: "1",
//     name: "Minsoo Kim",
//     pictureLink: minsoo,
//     title: "Founder and CEO",
//     twitterLink: "1"
//   },
//   {
//     facebookLink: "123",
//     instagramLink: "123",
//     linkedinLink: "123",
//     name: "Reid Frasier",
//     pictureLink: reid,
//     title: "CTO",
//     twitterLink: "123"
//   },
//   {
//     facebookLink: "123",
//     instagramLink: "123",
//     linkedinLink: "123",
//     name: "Jason Coyle",
//     pictureLink: jason,
//     title: "COO",
//     twitterLink: "123"
//   },
//   {
//     facebookLink: "123",
//     instagramLink: "123",
//     linkedinLink: "123",
//     name: "Steve Nelson",
//     pictureLink: steve,
//     title: "General Counsel",
//     twitterLink: "123"
//   }
// ];

export default class Team extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
  }
  public render() {
    return (
      <div className="teamSection">
        <SectionHeader {...headerContent} />
        <Row>
          <Col sm="12" md="6" lg="6" xl="3">
            <TeamMember
              facebookLink="2"
              instagramLink="1"
              linkedinLink="1"
              name="Minsoo Kim"
              pictureLink={minsoo}
              title="Founder and CEO"
              twitterLink="1"
            />
          </Col>
          <Col sm="12" md="6" lg="6" xl="3">
            <TeamMember
              facebookLink="2"
              instagramLink="1"
              linkedinLink="1"
              name="Reid Fraiser"
              pictureLink={reid}
              title="CTO"
              twitterLink="1"
            />
          </Col>{" "}
          <Col sm="12" md="6" lg="6" xl="3">
            <TeamMember
              facebookLink="2"
              instagramLink="1"
              linkedinLink="1"
              name="Jason Coyle"
              pictureLink={jason}
              title="COO"
              twitterLink="1"
            />
          </Col>
          <Col sm="12" md="6" lg="6" xl="3">
            <TeamMember
              facebookLink="2"
              instagramLink="1"
              linkedinLink="1"
              name="Steve Nelson"
              pictureLink={steve}
              title="General Counsel"
              twitterLink="1"
            />
          </Col>
        </Row>
        {/* <div className="teamContainer">
            {tempTeamInfo.map((member, i) => {
              return <TeamMember {...member} key={i} />;
            })}
          </div> */}
      </div>
    );
  }
}
