// Importing modules
import * as React from "react";
// Importing styling and static assets
// Importing reduc and friends
// Importing react routering

// Importing UI elements
import { Button } from "reactstrap";
import ContentBox from "src/Components/ContentBox/ContentBox";
import HeroSection from "src/Components/HeroSection/HeroSection";
import InputBox from "src/Components/InputBox/InputBox";
import SectionHeader from "src/Components/SectionHeader/SectionHeader";
import Team from "src/Components/Team/Team";
// Importing interfaces

export default class LandingPage extends React.Component {
  public render() {
    return (
      <div className="landingPage">
        <header className="Hero">
          <h1 className="Punchline">
            Support Your Beloved <br /> Creative Media Projects
          </h1>
          <h3>Invest into what you believe in. Don't be an outsider.</h3>
          <InputBox message="Subscribe for updates" />
          <Button>Subscribe</Button>
          <ContentBox />
          <SectionHeader header={"heading 1"} subHeader={"subHeading 1"} />
          <Team
            name={"Minsoo Kim"}
            title={"Founder and CEO"}
            picture={"./img/minsoo.jpg"}
          />
        </header>
        <HeroSection />
        {/* <div className="fullPage" id="projects">
        </div>
        <div className="fullPage" id="howitworks">
        </div>
        <div className="fullPage" id="partners"></div>
        <div className="fullWidth" id="team"></div>
        <div className="fullWidth" id="subscription"></div>
        <footer className="fullWidth"></footer> */}
      </div>
    );
  }
}
