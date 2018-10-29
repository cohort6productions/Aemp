<<<<<<< HEAD
import * as React from "react";
import { Button } from "reactstrap";
import "./App.css";
=======
import * as React from 'react';
import './App.css';


import { Alert, Button } from 'reactstrap';


import logo from './logo.svg';
>>>>>>> b809026fa62f37f685ebd492e66a25e27d56aa2c

class App extends React.Component {
  public render() {
    return (
      <div className="App">
<<<<<<< HEAD
        <header className="Hero">
          <h1 className="Punchline">
            Support Your Beloved <br /> Creative Media Projects
          </h1>
          <h3 className="Subline">
            Invest into what you believe in, don't be an outsider
          </h3>
=======
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <Alert color="primary">
            This  is a primary alert — check it out!
      </Alert>
          <Button>OH yea</Button>
>>>>>>> b809026fa62f37f685ebd492e66a25e27d56aa2c
        </header>
        <Button> Hi </Button>
      </div>
    );
  }
}

export default App;
