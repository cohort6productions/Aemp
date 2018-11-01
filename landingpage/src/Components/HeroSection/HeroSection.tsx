// Importing modules
import * as React from "react";

// Importing styling and static assets
import "./HeroSection.scss";

// Importing reduc and friends
// Importing react routering
// Importing UI elements
import { Button } from "reactstrap";
import InputBox from "src/Components/InputBox/InputBox";
import Navbar from "src/Components/NavBar/NavBar";
// Importing interfaces

export default class HeroSection extends React.Component {
  public render() {
    return (
      <header className="fullPage" id="hero">
        <Navbar />
        <h1 className="Punchline text-white">
          Support Your Beloved <br /> Creative Media Projects
        </h1>
        <h3 className="text-white">
          Invest into what you believe in. Don't be an outsider.
        </h3>
        <InputBox message="Subscribe for updates" />
        <Button>Subscribe</Button>
      </header>
    );
  }
}
