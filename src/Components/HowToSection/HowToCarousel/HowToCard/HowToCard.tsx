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
        <Row style={{ alignItems: "center" }}>
          <Col md="12" lg="6" className="howToContent">
            <h3>{this.props.heading}</h3>
            <h4>{this.props.subHeading}</h4>
            <p>{this.props.content}</p>
          </Col>
          <Col md="12" lg="6" className="howToImage">
            <img
              src={this.props.picture}
              width="100%"
              // className="img-center center-block"
            />
          </Col>
        </Row>
      </div>
    );
  }
}
