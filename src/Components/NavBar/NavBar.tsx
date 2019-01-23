import * as History from "history";

import { withRouter } from "react-router";

import React from "react";
import {
  Button,
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink
} from "reactstrap";
import { INavBarState } from "../../Interfaces/Interfaces";
import "./NavBar.scss";

// import Logo from "./Images/logo-hwz-org.png";
import Logo from "./Images/logo-transbg.png";

// Importing interfaces
interface IHeaderProps {
  history: History.History;
}

class NavBar extends React.Component<IHeaderProps, INavBarState> {
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

  public toHome = () => {
    this.props.history.push("/");
  };

  public render() {
    return (
      <Navbar className="navCenter" light={true} expand="lg">
        <NavbarBrand onClick={this.toHome}>
          <img className="navLogo" src={Logo} alt="Aemp Logo" id="navLg" />
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} id="opened" />
        <Collapse className="" isOpen={this.state.isOpen} navbar={true}>
          {/* <div id="linksAndButton"> */}
          <Nav className="navbar-nav mr-auto" navbar={true}>
            {/* <NavItem>
              <NavLink href="/components/" className="navLinks text-white">
                <span className="text-white ">Search</span>
              </NavLink>
            </NavItem> */}
            <NavItem>
              <NavLink href="/components/" className="navLinks text-white">
                <span className="text-white ">How It Works</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/" className="navLinks text-white">
                <span className="text-white ">Partners</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/" className="navLinks text-white">
                <span className="text-white ">Contact Us</span>
              </NavLink>
            </NavItem>
          </Nav>
          <Button
            className="button"
            // id="buttonLogin"
            color={"light"}
          >
            <span className="text-orange">Login / Register</span>
          </Button>
        </Collapse>
      </Navbar>
    );
  }
}

export default withRouter(NavBar as any);
