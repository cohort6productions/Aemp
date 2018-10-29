// Importing modules
import * as React from 'react';
import './App.scss';

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
      <HeroSection/>
      </div>
    );
  }
}

export default App;
