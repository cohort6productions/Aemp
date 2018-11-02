// Importing modules
import * as React from "react";
// Importing styling and static assets
import "./HowToSection.scss";

// Importing reduc and friends
// Importing react routering
// Importing UI elements
import HowToCarousel from "./HowToCarousel/HowToCarousel";
// Importing interfaces

export default class HowToSection extends React.PureComponent {
  public render() {
    return (
      <div className="fullWidth">
        <h2> Single Item</h2>
        <HowToCarousel />
      </div>
    );
  }
}
