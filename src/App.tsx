// Importing modules
import * as React from "react";

// Importing styling and static assets
import "./App.scss";

// Importing routes
import Website from "src/Routes/website";

export default class App extends React.Component {
  public render() {
    return (
      <div>
        <Website />
      </div>
    );
  }
}
