// Importing modules
import * as React from "react";

// Importing styling and static assets
import "./CreatorProjectBox.scss";
// Importing reduc and friends
// Importing react routering
// Importing UI elements

// Importing interfaces
import {
  ICreatorProjectBoxProps,
  ICreatorProjectBoxState
} from "src/Interfaces/Interfaces";

export default class ICreatorProjectBox extends React.Component<
  ICreatorProjectBoxProps,
  ICreatorProjectBoxState
> {
  constructor(props: ICreatorProjectBoxProps) {
    super(props);

    this.state = {
      isHover: false
    };

    this.closeHover = this.closeHover.bind(this);
    this.openHover = this.openHover.bind(this);
  }

  public openHover = () => {
    this.setState({ isHover: true });
  };

  public closeHover = () => {
    this.setState({ isHover: false });
  };

  public render() {
    return (
      <div
        className="gridBox"
        id={this.props.id}
        onMouseEnter={this.openHover}
        onMouseLeave={this.closeHover}
      >
        {this.state.isHover && this.props.dataSet.highlight && (
          <div className="gridContent">
            <h3 className="boxHead nullMargin text-white">
              {this.props.dataSet.name}
            </h3>
            <p className="boxCont nullMargin text-white">
              {this.props.dataSet.description}
            </p>
            <a href="">
              <span className="boxLink text-white">Learn More</span>
            </a>
          </div>
        )}
        <img
          src={this.props.dataSet.image}
          alt={this.props.dataSet.name}
          className="boxImage rounded"
        />
        <div className="cornerTag">
          <span className="tagText">{this.props.dataSet.name}</span>
        </div>
      </div>
    );
  }
}
