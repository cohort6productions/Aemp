// Importing modules
import * as React from "react";
// Importing styling and static assets
import "./CookiePolicy.scss";
// Importing reduc and friends
// Importing react routering

// Importing UI elements
import CookieConsent from "src/Components/CookieConsent/CookieConsent";
import Footer from "src/Components/Footer/Footer";
import HeroSection from "src/Components/HeroSection/HeroSection";
import Subscribe from "src/Components/Subscribe/Subscribe";

// Importing interfaces

export default class CookiePolicy extends React.Component {
  public render() {
    return (
      <div className="landingPage">
        <HeroSection />
       
        <CookieConsent />
        <Subscribe />
        <Footer />
      </div>
    );
  }
}
