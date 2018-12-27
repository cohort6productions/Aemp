// Importing modules
import * as React from "react";

// Importing styling and static assets
import "./HeroSection.scss";

// Importing reduc and friends
// Importing react routering
// Importing UI elements
import { Button, Input, InputGroup, InputGroupAddon } from "reactstrap";
// import InputBox from "src/Components/InputBox/InputBox";
import Navbar from "src/Components/NavBar/NavBar";
// Importing interfaces

export default class HeroSection extends React.Component {
  public render() {
    return (
      <header className="fullPage" id="hero">
        <Navbar />
        <div className="heroContent">
          <h2 className="typeface-body text-white">
            Back creative media projects <br /> via Blockchain
          </h2>
          <p className="text-white">
            Invest transparently alongside creators, producers & talents
          </p>
          {/* <div className="subscribeSection">
            <div className="emailInput">
              <InputBox message="Subscribe for updates" />
            </div>
            <Button className="button" color="warning">
              Subscribe
            </Button>
          </div> */}
          <InputGroup id="subInputBox">
            <Input placeholder="Come join our team" />
            <InputGroupAddon addonType="append">
              <Button color="warning" className="button">
                Fund your project
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </div>
      </header>
    );
  }
}
