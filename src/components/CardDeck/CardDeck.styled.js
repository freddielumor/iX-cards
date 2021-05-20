import styled from "styled-components";
import { appStyles } from "../../styles/appStyles";

export const CardDeck = styled.div``;

export const Wrapper = styled.div`
  margin: ${(props) => (props.deckisEmpty ? "auto" : "1.25rem 0 0 10.625rem")};
`;

export const Heading = styled.h2`
  color: ${appStyles.color.white};
  text-align: center;
  text-decoration: underline;
  margin-top: 0;
`;
