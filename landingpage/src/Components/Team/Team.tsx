import * as React from "react";
import "./Team.scss";

import { Card, CardImg, CardSubtitle, CardTitle, Col, Row } from "reactstrap";

// importing social icons
import facebook from "src/Components/Team/img/facebook.svg";
import instagram from "src/Components/Team/img/instagram.svg";
import linkedin from "src/Components/Team/img/linkedin.svg";
import twitter from "src/Components/Team/img/twitter.svg";

import { ITeamProps } from "src/Interfaces/Interfaces";

export default class Team extends React.Component<ITeamProps> {
  constructor(props: ITeamProps) {
    super(props);
  }
  public render() {
    return (
      <div className="teamCard">
        <Card>
          <CardImg
            className="cardImg"
            width="100%"
            src={require(`${this.props.picture}`)}
          />
          <CardTitle className="cardTitle">{this.props.name}</CardTitle>
          <CardSubtitle className="cardSubtitle">{this.props.title}</CardSubtitle>
          <Row className="socialIcon">
            <Col>
              <img src={facebook} />
            </Col>
            <Col>
              <img src={instagram} />
            </Col>
            <Col>
              <img src={linkedin} />
            </Col>
            <Col>
              <img src={twitter} />
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}
