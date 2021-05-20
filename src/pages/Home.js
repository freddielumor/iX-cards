import React, { useContext, useEffect } from "react";
import * as SC from "./Home.styled.js";
import { CardContext } from "../context/cardContext";
import * as actions from "../actions/cardActions";
import data from "../utils/data.json";

import CardDeck from "../components/CardDeck/CardDeck";
import DrawCards from "../components/DrawCards/DrawCards";
import MyCards from "../components/MyCards/MyCards";
import Controls from "../components/Controls/Controls";

const Home = () => {
  const { cards, dispatch } = useContext(CardContext);

  useEffect(() => {
    const savedLocalData = localStorage.getItem("cardData");
    const savedDeckData = JSON.parse(savedLocalData);

    if (savedLocalData) {
      dispatch(actions.laodSavedDeckAction(savedDeckData));
    } else {
      dispatch(actions.loadDefaultDeckAction(data));
    }
  }, [cards.deckSaved, dispatch]);

  return (
    <SC.Home data-testid="home">
      <SC.Title>iX Cards</SC.Title>

      <SC.Content>
        <CardDeck data={cards.cardDeck} emptyDeckMessage="CARD DECK IS EMPTY" />
        <Controls />
        <DrawCards />
        {cards.cardAddedToDrawnDeck && <MyCards data={cards.drawnCardsDeck} />}
      </SC.Content>
    </SC.Home>
  );
};

export default Home;
