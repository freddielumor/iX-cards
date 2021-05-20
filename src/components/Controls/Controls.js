import React, { useContext, useEffect } from "react";
import * as SC from "./Controls.styled";
import { CardContext } from "../../context/cardContext";
import * as actions from "../../actions/cardActions";
import data from "../../utils/data.json";
import { saveLocalDeckData } from "../../helpers/saveLocalDeck";
import { clearLocalDeckData } from "../../helpers/clearLocalDeck";

import Button from "../Button/Button";

const Controls = () => {
  const { cards, dispatch } = useContext(CardContext);
  const { deckShuffled, cardDrawnFromDeck } = cards;

  useEffect(() => {
    saveLocalDeckData(cards);
    clearLocalDeckData(cards);
  }, [cards]);

  return (
    <SC.Controls data-testid="controls" className="controls">
      <Button
        label="Save"
        onClick={() => dispatch(actions.saveDeckAction())}
        disabled={!deckShuffled || !cardDrawnFromDeck}
      />
      <Button
        label="Reset"
        onClick={() => dispatch(actions.resetDeckAction(data))}
      />
    </SC.Controls>
  );
};

export default Controls;
