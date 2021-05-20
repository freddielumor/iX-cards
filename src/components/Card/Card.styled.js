import styled from "styled-components";
import { appStyles } from "../../styles/appStyles";

export const Card = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
  background-color: ${appStyles.color.white};
  border-radius: 0.625rem;
  font-size: 1.25rem;
  color: ${(props) => props.color && props.color};
  height: 15.625rem;
  width: 12.5rem;
  margin-left: -10.625rem;
`;

export const CardSectionTop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px;
  display: flex;
  align-items: center;
`;

export const CardSectionBottom = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 0.625rem;
  display: flex;
  align-items: center;
  transform: rotate(180deg);
`;

export const Text = styled.p`
  margin: 0;
`;

export const Icon = styled(Text)`
  padding-left: 0.3125rem;
  font-size: 2rem;
`;
