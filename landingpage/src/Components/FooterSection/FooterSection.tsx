import * as React from "react";
import "./FooterSection.scss";

import { Button, Col, Input, Row } from "reactstrap";
// Importing interfaces

export default class FooterSection extends React.Component {
  public render() {
    return (
      <Row id="footerTop">
        <Col>
          <h3 className="Tagline">Share our vision</h3>
          <p>
            We are ambitious about our vision, but we need talented people like
            you to grow.
          </p>
        </Col>
        <Col className="footerSubscribe">
          <Input message="Come join our team" />
          <Button color="warning">Join our team</Button>
        </Col>
      </Row>
    );
  }
}
