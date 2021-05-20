import styled from "styled-components";
import { appStyles } from "../styles/appStyles";

export const Home = styled.div`
  background-color: green;
  height: 100vh;
  overflow-y: scroll;
  padding: 1.25rem;
`;

export const Title = styled.h1`
  color: ${appStyles.color.white};
  margin: 0;
  text-align: center;
`;

export const Content = styled.div`
  margin-top: 1.875rem;
`;
