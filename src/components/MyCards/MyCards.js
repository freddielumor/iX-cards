import React, { useContext } from "react";
import { CardContext } from "../../context/cardContext";
import * as actions from "../../actions/cardActions";
import * as SC from "./MyCards.styled";

import Button from "../../components/Button/Button";
import CardContainer from "../CardContainer/CardContainer";

const MyCards = ({ data }) => {
  const { cards, dispatch } = useContext(CardContext);

  return (
    <SC.MyCards data-testid="my-cards">
      <SC.Heading>My Cards</SC.Heading>

      <Button
        label="Sort"
        onClick={() =>
          dispatch(actions.sortDrawnCardsAction(cards.drawnCardsDeck))
        }
        disabled={!cards.drawnCardsDeck.length}
      />

      <SC.Wrapper>
        <CardContainer data={data} />
      </SC.Wrapper>
    </SC.MyCards>
  );
};

export default MyCards;
