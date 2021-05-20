import styled from "styled-components";
import { Button } from "../../components/Button/Button.styled";
import { appStyles } from "../../styles/appStyles";

export const DrawCards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 1.875rem;
  text-align: center;
`;

export const Form = styled.form`
  ${Button} {
    margin-top: 0.625rem;
  }
`;

export const Input = styled.input`
  border: none;
  text-align: center;
  height: 1.875rem;
  width: 9.375rem;
  border-radius: 0.1875rem;
`;

export const Heading = styled.h2`
  color: ${appStyles.color.white};
  margin-top: 0;
`;
