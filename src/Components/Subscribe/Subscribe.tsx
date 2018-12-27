import * as React from "react";
import "./Subscribe.scss";

import {
  Button,
  Col,
  Input,
  InputGroup,
  InputGroupAddon,
  // Jumbotron,
  Row
} from "reactstrap";
// import Container from "reactstrap/lib/Container";
// Importing interfaces

export default class Subscribe extends React.Component {
  public render() {
    return (
      // <Jumbotron fluid={true}>
      // <Container fluid={true}>
      <Row id="footerTop">
        <Col xs="12" sm="12" md="12" lg="6">
          <h2 className="text-white" id="subscribeHeader">
            Share our vision
          </h2>
          <p className="text-white nullMargin">
            We are ambitious about our vision, <br />
            but we need talented people like you to grow.
          </p>
        </Col>
        <Col id="footerJoin" xs="12" sm="12" md="12" lg="6">
          <InputGroup>
            <Input placeholder="Come join our team" />
            <InputGroupAddon addonType="append">
              <Button color="warning" className="button" id="button">
                Fund your project
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </Col>
      </Row>
      // </Container>
      // </Jumbotron>
    );
  }
}
