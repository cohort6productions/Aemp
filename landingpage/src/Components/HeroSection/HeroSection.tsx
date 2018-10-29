// Importing modules
import * as React from "react";

// Importing styling and static assets
import "./HeroSection.scss";

// Importing reduc and friends
// Importing react routering
// Importing UI elements
import { Button } from "reactstrap";
import ContentBox from "src/Components/ContentBox/ContentBox";
import InputBox from "src/Components/InputBox/InputBox";
// Importing interfaces

export default class HeroSection extends React.Component {
  public render() {
    return (
      <header className="Hero">
        <h1 className="Punchline">
          Support Your Beloved <br /> Creative Media Projects
        </h1>
        <h3>Invest into what you believe in. Don't be an outsider.</h3>
        <InputBox message="Subscribe for updates" />
        <Button>Subscribe</Button>
        <ContentBox />
      </header>
    );
  }
}
