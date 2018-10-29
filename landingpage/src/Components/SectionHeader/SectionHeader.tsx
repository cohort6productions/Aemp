import * as React from "react";
import "./SectionHeader.scss";

import { Card } from "reactstrap";

import { ISectionHeaderProps } from "src/Interfaces/Interfaces";

export default class SectionHeader extends React.Component<
  ISectionHeaderProps
> {
  constructor(props: ISectionHeaderProps) {
    super(props);
  }
  public render() {
    return (
      <div>
        <h2 className="sectionHeader"> {this.props.header} </h2>
        <Card style={{ backgroundColor: "orange", width: "35%" }} />
        <h3 className="sectionSubHeader"> {this.props.subHeader} </h3>
      </div>
    );
  }
}
