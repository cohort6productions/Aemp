import * as React from "react";
import "./HowToCard.scss";

// CardImg, CardSubtitle, CardTitle,

import { Col, Row } from "reactstrap";
import { IHowToCardProps } from "src/Interfaces/Interfaces";

export default class HowToCard extends React.Component<IHowToCardProps> {
  constructor(props: IHowToCardProps) {
    super(props);
  }
  public render() {
    return (
      <div className="howToCard">
        <Row>
          <Col sm="12" md="6" className="howToContent">
            <h1>{this.props.heading}</h1>
            <h2>{this.props.subHeading}</h2>
            <p>{this.props.content}</p>
          </Col>
          <Col sm="12" md="6" className="howToImage">
            <img
              src={this.props.picture}
              width="100%"
              className="img-center center-block"
            />
          </Col>
        </Row>
      </div>
    );
  }
}
