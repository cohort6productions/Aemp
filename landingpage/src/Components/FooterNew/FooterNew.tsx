import * as React from "react";
import "./FooterNew.scss";

import {
  Button,
  Col,
  Input,
  InputGroup,
  InputGroupAddon,
  Row
} from "reactstrap";

import Facebook from "./Images/facebook.svg";
import Instagram from "./Images/instagram.svg";
import Linkedin from "./Images/linkedin.svg";
import Logo from "./Images/logo-hwz-org@0.5x.png";
import Twitter from "./Images/twitter.svg";

// Importing interfaces

export default class Footer extends React.Component {
  public render() {
    return (
      <div className="fullWidthFooter">
        <div id="siteMapGrid">
          <img className="siteMapHeader" src={Logo} alt="" id="logo" />
          <h4 className="siteMapHeader" id="search">
            Search
          </h4>
          <h4 className="siteMapHeader" id="policies">
            Policies
          </h4>
          <h4 className="siteMapHeader" id="sub">
            Subscribe
          </h4>
          <div className="hwFlexStart" id="logoCont">
            <a href="mailto:info@ambrasia.com">info@ambrasia.com</a>
          </div>
          <div className="hwFlexStart" id="searchCont">
            <a href="#">Creators</a>
            <a href="#">Projects</a>
          </div>
          <div className="hwFlexStart" id="policiesCont">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms and Conditions</a>
            <a href="#">Cookie Policy</a>
          </div>
          <div className="hwFlexStart" id="followUsCont">
            <div>
              <a href="#" className="social">
                <img src={Facebook} alt="Aemp Facebook" className="icons" />
              </a>
              <a href="#" className="social">
                <img src={Twitter} alt="Aemp Twitter" className="icons" />
              </a>
              <a href="#" className="social">
                <img src={Linkedin} alt="Aemp LinkedIn" className="icons" />
              </a>
              <a href="#" className="social">
                <img src={Instagram} alt="Aemp Instagram" className="icons" />
              </a>
            </div>
            <div>
              <InputGroup>
                <Input placeholder="Be the first to know" />
                <InputGroupAddon addonType="append">
                  <Button color="secondary" id="buttonArrow">
                    Subscribe
                  </Button>
                </InputGroupAddon>
              </InputGroup>
            </div>
          </div>
          <div className="subCont" />
        </div>

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
