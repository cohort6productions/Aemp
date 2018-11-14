// Importing modules
import * as React from "react";


// Importing styling and static assets
import "./App.scss";

// Importing reduc and friends
// Importing react routering

// Importing UI elements
// Importing interfaces
import Website from "src/Routes/website";
// import logo from './logo.svg';

export default class App extends React.Component {
  public render() {
    return (
      <div>
        <Website />
      </div>
    );
  }
}
