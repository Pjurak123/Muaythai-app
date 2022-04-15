import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "red" : "blue")};
  height: 80px;
  margin-top: 0px;
  margin-left: 0px;
  margin-right: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 25px;
  background-color: black;
  position: fixed;
`;

export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 10px;
  font-weight: bold;
  text-decoration: none;

  :hover {
    color: lightblue;
    cursor: pointer;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 950px) {
    display: block;
    position: absolute;
    top: 24px;
    right: 24px;
    transform: translate (-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;
{
  /*CSS ZA KREIRANJE UNORDINARY LISTE NA NAVIGATION TRACI */
}
export const NavMenu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
  list-style: none;
  margin: 0 auto;

  @media screen and (max-width: 950px) {
    display: none;
  }
`;
{
  /*CSS ZA LISTU  NA NAVIGATION LISTI */
}
export const NavItem = styled.li`
  width: 175px;
  height: 80px;
  transition: background-position-x 0.9s linear;
  text-align: center;
  cursor: pointer;
`;

{
  /*O NAMA, KONTAKT, REZERVIRAJ, LOKACIJA */
}
export const NavLinks = styled(LinkS)`
    font-size: 22px;
    color: #777;
    text-decoration: none;
    transition: all 0.45s;
    display: flex;
    height: 75%;
    margin-top: 30px;
    margin-right: 45px;
    justify-content: center;
    cursor: pointer;
    
  &.active {
    color: #d94f5c;
    font-size: 25px;
  }

  &:hover {
    background: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEi%0D%0AIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhs%0D%0AaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB3aWR0%0D%0AaD0iMzkwcHgiIGhlaWdodD0iNTBweCIgdmlld0JveD0iMCAwIDM5MCA1MCIgZW5hYmxlLWJhY2tn%0D%0Acm91bmQ9Im5ldyAwIDAgMzkwIDUwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBhdGggZmlsbD0i%0D%0Abm9uZSIgc3Ryb2tlPSIjZDk0ZjVjIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLW1pdGVybGlt%0D%0AaXQ9IjEwIiBkPSJNMCw0Ny41ODVjMCwwLDk3LjUsMCwxMzAsMAoJYzEzLjc1LDAsMjguNzQtMzgu%0D%0ANzc4LDQ2LjE2OC0xOS40MTZDMTkyLjY2OSw0Ni41LDI0My42MDMsNDcuNTg1LDI2MCw0Ny41ODVj%0D%0AMzEuODIxLDAsMTMwLDAsMTMwLDAiLz4KPC9zdmc+Cg==");
    animation: line 1s;
  }

  &:hover {
    color:  #d94f5c;
  }

  &:not(:last-child) {
    margin-right: 30px;
  }
}

  @keyframes line {
    0% {
      background-position-x: 400px;
    }
    100% {
      background-position-x: 0px;
    }
  }



  
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 950px) {
    display: none;
  }
`;

{
  /*SIGN IN GUMB */
}
export const NavBtnLink = styled(LinkR)`
  border-radius: 25px;
  background: #777;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-family: "Varela Round", sans-serif;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #d94f5c;
    color: #010606;
  }
`;
