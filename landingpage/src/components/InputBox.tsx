import * as React from "react";
// import "./InputBox.css";

import { Form, FormGroup, Input } from "reactstrap";

import { IInputProps } from "../interfaces/interface";

export class InputBox extends React.Component<IInputProps> {
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
            id="exampleEmail"
            placeholder={this.props.message}
          />
        </FormGroup>
      </Form>
    );
  }
}

// export default InputBox;
