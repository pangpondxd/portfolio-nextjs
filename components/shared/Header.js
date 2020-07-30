import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import Link from "next/link";

const BsNavLink = (props) => {
  const { title, href } = props;
  return (
    <Link href={href}>
      <a className="nav-link port-navbar-link">{title}</a>
    </Link>
  );
};

const  Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)
    return (
      <div>
        <Navbar 
        className="port-navbar port-default absolute"
        color="transparent"
        dark
        expand="md">
          <Link href="/">
            <a className="port-navbar-brand">W.Tanawat</a>
          </Link>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem className="port-navbar-item">
                <BsNavLink href="/" title="Home" />
              </NavItem>
              <NavItem className="port-navbar-item">
                <BsNavLink href="/about" title="About" />
              </NavItem>
              <NavItem className="port-navbar-item">
                <BsNavLink href="/portfolios" title="Portfolios" />
              </NavItem>
              <NavItem className="port-navbar-item">
                <BsNavLink href="/blog" title="Blogs" />
              </NavItem>
              <NavItem className="port-navbar-item">
                <BsNavLink href="/cv" title="CV" />
              </NavItem>
              <NavItem className="port-navbar-item">
                <NavLink href="https://github.com/pangpondxd">Github</NavLink>
              </NavItem>
            </Nav>
            <NavbarText>Tanawat Wirattangsakul</NavbarText>
          </Collapse>
        </Navbar>
      </div>
    );
  }
export default Header