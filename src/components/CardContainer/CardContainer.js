import React from "react";
import Card from "../Card/Card";
import * as SC from "./CardContainer.styled.js";

const CardContainer = ({ data = [], emptyDeckMessage = "" }) => {
  if (!data.length)
    return <SC.EmptyDeckNotice>{emptyDeckMessage}</SC.EmptyDeckNotice>;

  return (
    <SC.CardContainer>
      {data.map((item) => (
        <Card
          key={item.id}
          suit={item.suit}
          value={item.value}
          color={item.color}
          icon={item.icon}
        />
      ))}
    </SC.CardContainer>
  );
};

export default CardContainer;
