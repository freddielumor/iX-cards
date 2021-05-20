export const saveLocalDeckData = (data) => {
  if (!data) return;
  const { deckShuffled, cardDrawnFromDeck, deckSaved } = data;

  if (deckShuffled && cardDrawnFromDeck && deckSaved) {
    localStorage.setItem("cardData", JSON.stringify(data));
  }
};
