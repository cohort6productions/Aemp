// Importing modules
import * as React from "react";

// Importing styling and static assets
import "./CreatorProjectBox.scss";
// Importing reduc and friends
// Importing react routering
// Importing UI elements

// Importing interfaces
import { ICreatorProjectBoxProps } from "src/Interfaces/Interfaces";

// const boxStyle = {
//   backgroundImage: `url({this.props.image})`,
//   height: "100%",
//   width: "100%"
// };

export default class ICreatorProjectBox extends React.Component<
  ICreatorProjectBoxProps,
  {}
> {
  constructor(props: ICreatorProjectBoxProps) {
    super(props);
  }

  public render() {
    return (
      <div
        className={this.props.highlight ? "lgGridBox" : "smGridBox"}
       
      >
        <img className="boxImage" src={this.props.image} alt="" />
        {/* <div className="nameTag rounded">
          <span className="nameTxt text-white rounded">{this.props.name}</span>
        </div> */}
      </div>
    );
  }
}
