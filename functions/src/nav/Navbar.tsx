// Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";
import { Logo, LogoContainer, NavBar } from "./styled";
import logoImage from "../assets/Group 30.png";

const Navbar = (): JSX.Element => {
  return (
    <NavBar>
      <LogoContainer>
        <Link to="/toDo">
          <Logo src={logoImage} alt="Logo" />
        </Link>
      </LogoContainer>
    </NavBar>
  );
};

export default Navbar;
