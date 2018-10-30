import * as React from "react";
import "./HowToCard.scss";

// CardImg, CardSubtitle, CardTitle,

import { Card, Col, Row } from "reactstrap";
import { IHowToCardProps } from "src/Interfaces/Interfaces";

import Picture from "./img/creator.jpg";

export default class HowToCard extends React.Component<IHowToCardProps> {
  constructor(props: IHowToCardProps) {
    super(props);
  }
  public render() {
    return (
      <div className="teamCard">
        <Card>
          <Row>
            <Col>
              <h1>Creators</h1>
              <h2>Producers, Writers and Talents</h2>
              <p>List your media project or yourself as cast of crew. Start financing for your media project now! Or offer your talents as a potential cast member or  crew</p>
            </Col>
            <Col> 
              <img src={Picture} width="100%" className="img-center center-block" />
            </Col>
          </Row>
          {/* <CardImg
            className="cardImg"
            width="100%"
            src={require(`${this.props.picture}`)}
          />
          <CardTitle className="cardTitle">{this.props.name}</CardTitle>
          <CardSubtitle className="cardSubtitle">{this.props.title}</CardSubtitle> */}
        </Card>
      </div>
    );
  }
}
