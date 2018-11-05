import * as React from "react";
import "./Footer.scss";

import { Button, Col, Input, Row } from "reactstrap";

import Facebook from "./Images/facebook.svg";
import Instagram from "./Images/instagram.svg";
import Linkedin from "./Images/linkedin.svg";
import Logo from "./Images/logo-hwz-org@0.5x.png";
import Twitter from "./Images/twitter.svg";

// Importing interfaces

export default class Footer extends React.Component {
  public render() {
    return (
      <div id="footer">
        <Row>
          <Col xs="12" sm="12" md="6" lg="3" className="footerColumn">
            <a href="#">
              <img src={Logo} id="footerLogo" />
            </a>
            <br />
            <a href="mailto:info@ambrasia.com">info@ambrasia.com</a>
            <br />
            <Row className="socialIcon">
              <Col>
                <img src={Facebook} />
              </Col>
              <Col>
                <img src={Twitter} />
              </Col>
              <Col>
                <img src={Linkedin} />
              </Col>
              <Col>
                <img src={Instagram} />
              </Col>
            </Row>
          </Col>
          <Col xs="12" sm="12" md="6" lg="3" className="footerColumn">
            <a href="#" className="title">
              Policies
            </a>
            <br />
            <a href="#">Privacy Policy</a>
            <br />
            <a href="#">Terms and Conditions</a>
            <br />
            <a href="#">Cookie Policy</a>
          </Col>
          <Col xs="12" sm="12" md="6" lg="3" className="footerColumn">
            <a href="#" className="title">
              Search
            </a>
            <br />
            <a href="#">Creators</a>
            <br />
            <a href="#">Projects</a>
          </Col>

          <Col xs="12" sm="12" md="6" lg="3" className="footerColumn">
            <p className="title">Subscribe</p>
            <div id="footerSubscribe">
              <Input id="inputBox" type="email" />
              <Button color="secondary" id="buttonArrow">
                >
              </Button>
            </div>
          </Col>
        </Row>
        <div id="divisionLine" />
        <Row id="disclaimer">
          <Col sm="12" md="6" id="leftDisclaimer">
            <p>Made with &#10084; by Cohort 6 Productions</p>
          </Col>
          <Col sm="12" md="6" id="rightDisclaimer">
            <p>@2018 Ambrasia Multimedia Limited All rights reserved</p>
          </Col>
        </Row>
      </div>
    );
  }
}
