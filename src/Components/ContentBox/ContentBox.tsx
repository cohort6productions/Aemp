import * as React from "react";
import "./ContentBox.scss";

import { Card, CardImg } from "reactstrap";

export default class ContentBox extends React.Component{

  public render() {
    return (
        <Card>
            <CardImg src="https://via.placeholder.com/150"/>
        </Card>
    );
  }
}
