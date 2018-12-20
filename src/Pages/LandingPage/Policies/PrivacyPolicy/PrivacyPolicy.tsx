// Importing modules
import * as React from "react";
// Importing styling and static assets
// Importing reduc and friends
// Importing react routering

// Importing UI elements
import Footer from "src/Components/Footer/Footer";
import HeroSection from "src/Components/HeroSection/HeroSection";
import Subscribe from "src/Components/Subscribe/Subscribe";

// Importing interfaces

export default class PrivacyPolicy extends React.Component {
  public render() {
    return (
      <div className="landingPage">
        <HeroSection />
        Private
        <Subscribe />
        <Footer />
      </div>
    );
  }
}
