// Importing modules
import * as React from "react";
// Importing styling and static assets
// Importing reduc and friends
// Importing react routering

// Importing UI elements
import CreatorProjectGridDisplay from "src/Components/CreatorProjectGridDisplay/CreatorProjectGridDisplay";
import HeroSection from "src/Components/HeroSection/HeroSection";
import HowToCarousel from "src/Components/HowToCarousel/HowToCarousel";
// Importing interfaces

export default class LandingPage extends React.Component {
  public render() {
    return (
      <div className="landingPage">
        <HeroSection />
        <CreatorProjectGridDisplay />
        <HowToCarousel />
      </div>
    );
  }
}
