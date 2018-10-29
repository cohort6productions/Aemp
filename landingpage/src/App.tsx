// Importing modules
import * as React from 'react';
import './App.scss';

import { Button } from "reactstrap";

import ContentBox  from "./Components/ContentBox/ContentBox";
import  InputBox from "./Components/InputBox/InputBox";
import  SectionHeader  from "./Components/SectionHeader/SectionHeader";
import Team from "./Components/Team/Team";

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
          <Team name={"Minsoo Kim"} title={"Founder and CEO"} />
        </header>
      <HeroSection/>
      </div>
    );
  }
}

export default App;
