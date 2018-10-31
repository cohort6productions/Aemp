// Importing modules
import * as React from "react";
// Importing styling and static assets
// Importing reduc and friends
// Importing react routering

// Importing UI elements
import HeroSection from "src/Components/HeroSection/HeroSection";
import HowToCarousel from "src/Components/HowToCarousel/HowToCarousel";
// Importing interfaces

export default class LandingPage extends React.Component {
  public render() {
    return (
      <div className="landingPage">
        {/* <header className="Hero">
          <h1 className="Punchline">
            Support Your Beloved <br /> Creative Media Projects
          </h1>
          <h3>Invest into what you believe in. Don't be an outsider.</h3>
          <InputBox message="Subscribe for updates" />
          <Button>Subscribe</Button>
          <ContentBox />
          <SectionHeader header={"heading 1"} subHeader={"subHeading 1"} />
          <HowToCard />
          <HowToCarousel />
          <Team
            name={"Minsoo Kim"}
            title={"Founder and CEO"}
            picture={"./img/minsoo.jpg"}
          />
        </header> */}
        <HeroSection />
        <HowToCarousel />
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
