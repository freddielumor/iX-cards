import React from "react";
import * as SC from "./Button.styled";
import "./Button.styled.js";

const Button = ({ type, label, onClick, disabled }) => {
  return (
    <SC.Button
      data-testid="button"
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </SC.Button>
  );
};

export default Button;
