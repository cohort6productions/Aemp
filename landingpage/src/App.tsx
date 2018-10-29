import * as React from "react";
import { Button } from "reactstrap";
import "./App.css";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="Hero">
          <h1 className="Punchline">
            Support Your Beloved <br /> Creative Media Projects
          </h1>
          <h3 className="Subline">
            Invest into what you believe in, don't be an outsider
          </h3>
        </header>
        <Button> Hi </Button>
      </div>
    );
  }
}

export default App;
