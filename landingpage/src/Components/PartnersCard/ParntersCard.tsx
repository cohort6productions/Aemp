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
  subHeader: `Some of the most powerful media partners also share the same vision as we do
    We believe we can help bring media projects to live with a little of your help`
};

export default class PartnersCard extends React.Component {
  public render() {
    return (
      <div id="floatingCard">
        <SectionHeader {...headerContent} />
        <Container className="float-center">
          <Row>
            <Col xs="12" sm="12" md="6" lg="3" className="column">
              <img className="logoImg" src={vtv} alt="" />
            </Col>
            <Col xs="12" sm="12" md="6" lg="3" className="column">
              <img className="logoImg" src={kpop} alt="" />
            </Col>
            <Col xs="12" sm="12" md="6" lg="3" className="column">
              <img className="logoImg" src={capcom} alt="" />
            </Col>
            <Col xs="12" sm="12" md="6" lg="3" className="column">
              <img className="logoImg" src={lol} alt="" />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
