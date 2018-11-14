// Importing modules
import * as React from "react";
// Importing styling and static assets
// Importing reduc and friends
// Importing react routering

// Importing UI elements
import Footer from "src/Components/FooterNew/FooterNew";
import FooterSection from "src/Components/FooterSection/FooterSection";
import HeroSection from "src/Components/HeroSection/HeroSection";

// Importing interfaces

export default class CookiePolicy extends React.Component {
  public render() {
    return (
      <div className="landingPage">
        <HeroSection />
        Cookie
        <FooterSection />
        <Footer />
      </div>
    );
  }
}
