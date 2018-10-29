<<<<<<< HEAD
import * as React from "react";
import "./App.css";
=======
import * as React from 'react';
import './App.scss';
>>>>>>> e3f10209c68ba1ea473112ee227921ce846ec7a3

import { Button } from "reactstrap";

import { ContentBox } from "./components/contentBox/contentBox";
import { InputBox } from "./components/inputBox/inputBox";

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
        </header>
      </div>
    );
  }
}

export default App;
