import React from "react";
import {
  Button,
  Collapse,
  // DropdownItem,
  // DropdownMenu,
  // DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  // UncontrolledDropdown
} from "reactstrap";
import { INavBarState } from "../../Interfaces/Interfaces";
import "./NavBar.scss";

import Logo from "./img/logo-hwz-org.png";

export default class NavBar extends React.Component<{}, INavBarState> {
  constructor(props: any) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  public toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  public render() {
    return (
      <div>
        <Navbar color="" light={true} expand="md">
          <NavbarBrand href="/">
            <img src={Logo} alt="Aemp Logo" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar={true}>
            <Nav className="ml-auto" navbar={true}>
              <NavItem>
                <NavLink href="/components/">Search</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  How it works
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Partners</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Contact Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Language</NavLink>
              </NavItem>
              <NavItem>
                <Button color={"warning"}>Login/Signup</Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
