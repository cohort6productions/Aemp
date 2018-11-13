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
  NavLink
  // UncontrolledDropdown
} from "reactstrap";
import { INavBarState } from "../../Interfaces/Interfaces";
import "./NavBar.scss";

import Logo from "./Images/logo-hwz-org.png";

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
      <Navbar className="navCenter" light={true} expand="lg">
        <NavbarBrand href="#">
          <img className="navLogo" src={Logo} alt="Aemp Logo" />
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} id="opened" />
        <Collapse isOpen={this.state.isOpen} navbar={true}>
          <div id="linksAndButton">
            <Nav className="navbar" navbar={true}>
              <NavItem>
                <NavLink href="/components/" className="navLinks text-white">
                  SEARCH
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/" className="navLinks text-white">
                  HOW IT WORKS
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/" className="navLinks text-white">
                  PARTNERS
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/" className="navLinks text-white">
                  CONTACT US
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/" className="navLinks text-white">
                  LANGUAGE
                </NavLink>
              </NavItem>
            </Nav>
            <Button className="button" id="buttonLogin" color={"warning"}>
              Login/Register
            </Button>
          </div>
        </Collapse>
      </Navbar>
    );
  }
}
