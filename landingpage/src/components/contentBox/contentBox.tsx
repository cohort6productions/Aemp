import * as React from "react";
import "./contentBox.scss";


import { Card, CardImg } from "reactstrap";

export class ContentBox extends React.Component{

  public render() {
    return (
        <Card>
            <CardImg src="https://via.placeholder.com/150"/>
        </Card>
    );
  }
}
