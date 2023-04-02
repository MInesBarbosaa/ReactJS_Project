import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
import logo from './dog.webp';
  
const Navbar = () => {
  return (
    <>
      <Nav>
      <NavMenu>
          <NavLink to="/" activeStyle>
            <img id="logo" src={logo} alt="Logo"/>
          </NavLink>
          <NavLink to="/about" activeStyle>
            Dogs Gallery
          </NavLink>
          <NavLink to="/blogs" activeStyle>
            BMI Calculator
          </NavLink>
          <NavLink to="/sign-up" activeStyle>
            Forum
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contact Us
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;