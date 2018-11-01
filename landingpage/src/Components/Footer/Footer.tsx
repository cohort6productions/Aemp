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
          <Col>
            <a href="#">
              <img src={Logo} />
            </a>
            <br />
            <a href="mailto:info@ambrasia.com">info@ambrasia.com</a>
          </Col>
          <Col>
            <a href="#">Search</a>
            <br />
            <a href="#">Creators</a>
            <br />
            <a href="#">Projects</a>
          </Col>
          <Col>
            <a href="#">Follow us</a>
            <br />
            <Row className="socialIcon">
              <Col>
                <img src={Facebook} />
              </Col>
              <Col>
                <img src={Instagram} />
              </Col>
              <Col>
                <img src={Linkedin} />
              </Col>
              <Col>
                <img src={Twitter} />
              </Col>
            </Row>
          </Col>
          <Col>
            Subscribe
            <div className="footerSubscribe">
              <Input className="inputBox" type="email" />
              <Button>></Button>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
