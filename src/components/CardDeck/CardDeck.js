import React, { useContext } from "react";
import { CardContext } from "../../context/cardContext";
import * as actions from "../../actions/cardActions";
import * as SC from "./CardDeck.styled";

import Button from "../../components/Button/Button";
import CardContainer from "../CardContainer/CardContainer";

const CardDeck = ({ data, emptyDeckMessage }) => {
  const { cards, dispatch } = useContext(CardContext);
  const deckisEmpty = !data.length;

  return (
    <SC.CardDeck data-testid="cardDeck">
      <SC.Heading>Card Deck</SC.Heading>

      <Button
        label="Shuffle"
        onClick={() => dispatch(actions.shuffleDeckAction(cards.cardDeck))}
        disabled={!cards.cardDeck.length}
      />

      <SC.Wrapper deckisEmpty={deckisEmpty}>
        <CardContainer data={data} emptyDeckMessage={emptyDeckMessage} />
      </SC.Wrapper>
    </SC.CardDeck>
  );
};

export default CardDeck;
