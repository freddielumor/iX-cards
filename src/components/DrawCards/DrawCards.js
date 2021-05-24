import React, { useContext, useState } from "react";
import * as SC from "./DrawCards.styled.js";
import { CardContext } from "../../context/cardContext";
import * as actions from "../../actions/cardActions";
import _ from "lodash";

import Button from "../../components/Button/Button";

const DrawCards = () => {
  const { cards, dispatch } = useContext(CardContext);
  const [count, setCount] = useState(1);

  const handleSetDrawCount = (e) => setCount(e.target.value);

  const handleDrawCard = (e, count, cardData, dispatch) => {
    if (!cardData.cardDeck.length) return;

    e.preventDefault();
    const cardDeck = cardData.cardDeck;

    // Draw given number of random cards from deck
    const selectedCards = _.sampleSize(cardDeck, count);

    // Filter out drawn cards from available cards deck
    const updatedCardDeck = cardDeck.filter(
      (item) => !selectedCards.some((selected) => item.id === selected.id)
    );

    dispatch(actions.drawFromCardDeckAction(updatedCardDeck));
    dispatch(actions.updateDrawnCardsDeckAction(selectedCards));
  };

  return (
    <SC.DrawCards data-testid="draw-cards">
      <SC.Heading>Draw Cards</SC.Heading>
      <SC.Form onSubmit={(e) => handleDrawCard(e, count, cards, dispatch)}>
        <SC.Input
          data-testid="drawCardFormInput"
          type="number"
          name="drawCardInput"
          value={count}
          max={cards.cardDeck.length}
          onChange={handleSetDrawCount}
          disabled={!cards.cardDeck.length}
        />

        <Button type="submit" label="Draw" disabled={!cards.cardDeck.length} />
      </SC.Form>
    </SC.DrawCards>
  );
};

export default DrawCards;
