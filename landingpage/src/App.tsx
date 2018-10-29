import * as React from 'react';
import './App.css';


import { Alert, Button } from 'reactstrap';


import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <Alert color="primary">
            This  is a primary alert — check it out!
      </Alert>
          <Button>OH yea</Button>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
