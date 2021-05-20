import styled from "styled-components";
import { appStyles } from "../../styles/appStyles";

export const Button = styled.button`
  display: block;
  margin: auto;
  background-color: ${appStyles.color.white};
  width: 8.125rem;
  height: 2.5rem;
  color: ${appStyles.color.black};
  border-radius: 0.3125rem;
  padding: 0.625rem 1.5625rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3);
  outline: none;

  &:hover {
    background-color: ${appStyles.color.btnHover};
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.7;
    background-color: grey;
  }
`;
