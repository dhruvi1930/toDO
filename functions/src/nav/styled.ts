// styled.ts
import styled from "styled-components";

const NavBar = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-around;
  padding: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 1rem 2rem;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

const Logo = styled.img`
  width: 70px;
  height: auto;
`;

const Title = styled.h1`
  color: white;
  margin: 0;
`;

const NavMenu = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }

  a {
    color: white;
    text-decoration: none;
    font-size: 18px;
    margin-right: 20px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export { NavBar, Logo, LogoContainer, NavMenu, Title };
