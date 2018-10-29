import * as React from 'react';
import './App.css';

// import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="Hero">
          <h1 className="Punchline">Support Your Beloved <br/> Creative Media Projects</h1>
          <h3 className="Subline">Invest into what you believe in, don't be an outsider</h3>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
