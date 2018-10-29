import * as React from "react";
import "./InputBox.scss";

import { Form, FormGroup, Input } from "reactstrap";

import { IInputProps } from "src/Interfaces/Interfaces";

export default class InputBox extends React.Component<IInputProps> {
  constructor(props: IInputProps) {
    super(props);
  }
  public render() {
    return (
      <Form>
        <FormGroup>
          <Input
            type="email"
            name="email"
            id="emailSubscribe"
            placeholder={this.props.message}
          />
        </FormGroup>
      </Form>
    );
  }
}
