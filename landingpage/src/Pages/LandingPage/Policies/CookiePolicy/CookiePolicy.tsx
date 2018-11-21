// Importing modules
import * as React from "react";
// Importing styling and static assets
import "./CookiePolicy.scss";
// Importing reduc and friends
// Importing react routering

// Importing UI elements
import CookieConsent from "src/Components/CookieConsent/CookieConsent";
import Footer from "src/Components/FooterNew/FooterNew";
import FooterSection from "src/Components/FooterSection/FooterSection";
import HeroSection from "src/Components/HeroSection/HeroSection";

// Importing interfaces

export default class CookiePolicy extends React.Component {
  public render() {
    return (
      <div className="landingPage">
        <HeroSection />
       
        <CookieConsent />
        <FooterSection />
        <Footer />
      </div>
    );
  }
}
