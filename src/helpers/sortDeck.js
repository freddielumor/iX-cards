export const sortDeckData = (deckData = []) => {
  if (!deckData) return;

  // Define suit sort order
  const suitOrder = ["clubs", "spades", "hearts", "diamonds"];

  // Define value sort order
  const valueOrder = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];

  return deckData.sort(
    (a, b) =>
      suitOrder.indexOf(a.suit) - suitOrder.indexOf(b.suit) ||
      valueOrder.indexOf(a.value) - valueOrder.indexOf(b.value)
  );
};
