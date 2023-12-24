// global.js
import styled from "styled-components";
import background from "./assets/background.jpg";

const AppContainer = styled.div``;

const AppHeader = styled.div`
  background-color: #282c34;
  background-image: url(${background});
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

export { AppContainer, AppHeader };
