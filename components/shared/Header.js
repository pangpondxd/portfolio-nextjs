import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import Link from "next/link";

const BsNavLink = (props) => {
  const { title, href } = props;
  return (
    <Link href={href}>
      <a className="nav-link">{title}</a>
    </Link>
  );
};

export default class Header extends React.Component {
  state = { isOpen: false };
  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Profiles</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <BsNavLink href="/" title="Home" />
              </NavItem>
              <NavItem>
                <BsNavLink href="/about" title="About" />
              </NavItem>
              <NavItem>
                <BsNavLink href="/portfolios" title="Portfolios" />
              </NavItem>
              <NavItem>
                <BsNavLink href="/blog" title="Blogs" />
              </NavItem>
              <NavItem>
                <BsNavLink href="/cv" title="CV" />
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/pangpondxd">Github</NavLink>
              </NavItem>
            </Nav>
            <NavbarText>Tanawat Wirattangsakul</NavbarText>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
