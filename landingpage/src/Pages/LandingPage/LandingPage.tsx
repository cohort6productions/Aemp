// Importing modules
import * as React from "react";
// Importing styling and static assets
// Importing reduc and friends
// Importing react routering

// Importing UI elements
import CreatorProjectGridDisplay from "src/Components/CreatorProjectGridDisplay/CreatorProjectGridDisplay";
import Footer from "src/Components/Footer/Footer";
import FooterSection from "src/Components/FooterSection/FooterSection";
import HeroSection from "src/Components/HeroSection/HeroSection";
import PartnersCard from "src/Components/PartnersCard/ParntersCard";

// Importing interfaces

export default class LandingPage extends React.Component {
  public render() {
    return (
      <div className="landingPage">
        <HeroSection />
        <CreatorProjectGridDisplay />
        <PartnersCard />
        {/* <Team /> */}
        <FooterSection/>
        <Footer/>

      </div>
    );
  }
}
