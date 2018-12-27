// Importing modules
import * as React from "react";

// Importing styling and static assets'
import capcom from "./Images/capcom.png";
import kpop from "./Images/kpop.png";
import lol from "./Images/lol.png";
import vtv from "./Images/vtv.png";
import "./PartnersCard.scss";

// Importing reduc and friends
// Importing react routering
// Importing UI elements
import { Col, Container, Row } from "reactstrap";
import SectionHeader from "src/Components/SectionHeader/SectionHeader";
// Importing interfaces

// Declaring variables
const headerContent = {
  header: "Partners",
  subHeader: `We collaborate with powerful media partners and talented individuals alike.  Our mission is to build an engaged, dynamic, and transparent ecosystem to produce multimedia content`
};

export default class PartnersCard extends React.Component {
  public render() {
    return (
      <div className="fullWidth">
        <div className="rounded" id="floatingCard">
          <SectionHeader {...headerContent} />
          <Container className="float-center rounded">
            <Row>
              <Col sm="12" md="6" lg="3" className="column">
                <img className="logoImg" src={vtv} alt="" />
              </Col>
              <Col sm="12" md="6" lg="3" className="column">
                <img className="logoImg" src={kpop} alt="" />
              </Col>
              <Col sm="12" md="6" lg="3" className="column">
                <img className="logoImg" src={capcom} alt="" />
              </Col>
              <Col sm="12" md="6" lg="3" className="column">
                <img className="logoImg" src={lol} alt="" />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
