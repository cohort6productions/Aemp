import * as History from "history";
import * as React from "react";
import "./Footer.scss";

import { withRouter } from "react-router";

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

import Jumbotron from "reactstrap/lib/Jumbotron";

// Importing interfaces
interface IFooterProps {
  history: History.History;
}

class Footer extends React.Component<IFooterProps> {
  constructor(props: IFooterProps) {
    super(props);
  }

  public toPrivacy = () => {
    this.props.history.push("/policy/privacy_policy");
  };
  public toTerms = () => {
    this.props.history.push("/policy/terms_and_conditions");
  };
  public toCookie = () => {
    this.props.history.push("/policy/cookie_policy");
  };
  public toProjects = () => {
    this.props.history.push("/policy/privacy_policy");
  };
  public toCreators = () => {
    this.props.history.push("/policy/privacy_policy");
  };

  public render() {
    return (
      <Jumbotron className="bg-transparent" id="footerJumbo">
        <div id="siteMapGrid">
          <img className="siteMapHeader" src={Logo} alt="" id="logo" />
          <h4 className="siteMapHeader" id="search">
            Search
          </h4>
          <h4 className="siteMapHeader" id="policies">
            Policies
          </h4>
          <h4 className="siteMapHeader" id="sub">
            Subscribe and Follow
          </h4>
          <div className="colFlexStart botMg5vh" id="logoCont">
            <a href="mailto:info@ambrasia.com">
              <span className="text-liteBlue">info@ambrasia.com</span>
            </a>
          </div>
          <div className="colFlexStart botMg5vh" id="searchCont">
            <a className="footerLink" onClick={this.toCreators}>
              <span className="text-liteBlue">Creators</span>
            </a>
            <a className="footerLink" onClick={this.toProjects}>
              <span className="text-liteBlue">Projects</span>
            </a>
          </div>
          <div className="colFlexStart botMg5vh" id="policiesCont">
            <a className="footerLink" onClick={this.toPrivacy}>
              <span className="text-liteBlue">Privacy Policy</span>
            </a>
            <a className="footerLink" onClick={this.toTerms}>
              <span className="text-liteBlue">Terms and Conditions</span>
            </a>
            <a className="footerLink" onClick={this.toCookie}>
              <span className="text-liteBlue">Cookie Policy</span>
            </a>
          </div>
          <div className="colFlexStart" id="followUsCont">
            <div className="rowFlexSpcBtw halfWidth" id="footerSocial">
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

            <InputGroup>
              <Input placeholder="Be the first to know" />
              <InputGroupAddon addonType="append">
                <Button color="secondary" className="button" id="buttonArrow">
                  Subscribe
                </Button>
              </InputGroupAddon>
            </InputGroup>
          </div>
          <div className="subCont" />
        </div>

        <div id="divisionLine" />
        <Row id="disclaimer">
          <Col sm="12" md="6" id="leftDisclaimer">
            <p className="text-liteBlue">
              Made with &#10084; by{" "}
              <a
                className="text-liteBlue"
                href="https://www.cohort6productions.com"
              >
                Cohort 6 Productions
              </a>
            </p>
          </Col>
          <Col sm="12" md="6" id="rightDisclaimer">
            <p className="text-liteBlue">
              @2018 Ambrasia Multimedia Limited All rights reserved
            </p>
          </Col>
        </Row>
      </Jumbotron>
    );
  }
}

export default withRouter(Footer as any);
