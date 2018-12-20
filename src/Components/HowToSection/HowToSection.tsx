// Importing modules
import * as React from "react";
// Importing styling and static assets
import "./HowToSection.scss";

// Importing reduc and friends
// Importing react routering
// Importing UI elements

import SectionHeader from "src/Components/SectionHeader/SectionHeader";
import HowToCarousel from "./HowToCarousel/HowToCarousel";
// Importing interfaces

export default class HowToSection extends React.PureComponent {
  public render() {
    return (
      <div className="fullWidthCont">
        <SectionHeader header="How To" subHeader="Enjoy a straightforward process from beginning to end"/>
        <HowToCarousel />
      </div>
    );
  }
}
