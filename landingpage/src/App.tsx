// Importing modules
import * as React from 'react';
import './App.scss';

import { Button } from "reactstrap";

import { ContentBox } from "./components/ContentBox/ContentBox";
import { InputBox } from "./components/InputBox/InputBox";
import { SectionHeader } from "./components/sectionHeader/sectionHeader";

// Importing styling and static assets
// Importing reduc and friends
// Importing react routering
// Importing UI elements
import HeroSection from "src/Components/HeroSection/HeroSection";
// Importing interfaces

// import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="Hero">
          <h1 className="Punchline">
            Support Your Beloved <br /> Creative Media Projects
          </h1>
          <h3>Invest into what you believe in. Don't be an outsider.</h3>
          <InputBox message="Subscribe for updates" />
          <Button>Subscribe</Button>
          <ContentBox/>
          <SectionHeader header={"heading 1"} subHeader={"subHeading 1"}/>
        </header>
      <HeroSection/>
      </div>
    );
  }
}

export default App;
