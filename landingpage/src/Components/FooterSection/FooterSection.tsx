import * as React from "react";
import "./FooterSection.scss";

import { Button, Col, Input, Row } from "reactstrap";
// Importing interfaces

export default class FooterSection extends React.Component {
  public render() {
    return (
      <Row id="footerTop">
        <Col xs="12" sm="12" md="12" lg="6">
          <h3>Share our vision</h3>
          <p>
            We are ambitious about our vision, <br />
            but we need talented people like you to grow.
          </p>
        </Col>
        <Col id="footerJoin" xs="12" sm="12" md="12" lg="6">
          <Input message="Come join our team" />
          <Button color="warning" id="button">
            Join our team
          </Button>
        </Col>
      </Row>
    );
  }
}
