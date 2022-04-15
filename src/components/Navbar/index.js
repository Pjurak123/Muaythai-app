import React, { useState, useEffect } from "react";
import { Router } from "react-router";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ toggle, Logout }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= -80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            ZGMT
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                O NAMA
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                NAŠ TIM
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="services"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                REZERVIRAJ
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="location"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                LOKACIJA
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn onClick={Logout}>
            <NavBtnLink to="/signin">Odjavi se </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
