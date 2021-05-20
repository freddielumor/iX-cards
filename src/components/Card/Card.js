import React from "react";
import * as SC from "./Card.styled.js";

const Card = ({ suit, value, color, icon }) => {
  return (
    <SC.Card
      data-testid={`card card-${suit}`}
      className={`card card--${suit}`}
      color={color}
    >
      <SC.CardSectionTop>
        <SC.Text>{value}</SC.Text>
        <SC.Icon>{icon}</SC.Icon>
      </SC.CardSectionTop>

      <SC.Icon>{icon}</SC.Icon>

      <SC.CardSectionBottom>
        <SC.Icon>{icon}</SC.Icon>
        <SC.Text>{value}</SC.Text>
      </SC.CardSectionBottom>
    </SC.Card>
  );
};

export default Card;
