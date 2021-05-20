import { sortDeckData } from "../sortDeck";

describe("sortDeckData()", () => {
  const data = [
    { id: 1, suit: "clubs", value: "J", color: "black", icon: "♣" },
    { id: 2, suit: "spades", value: "A", color: "black", icon: "♠" },
    { id: 3, suit: "clubs", value: "A", color: "black", icon: "♣" },
    { id: 4, suit: "clubs", value: "4", color: "black", icon: "♣" },
    { id: 5, suit: "spades", value: "6", color: "black", icon: "♠" },
    { id: 6, suit: "clubs", value: "Q", color: "black", icon: "♣" },
    { id: 7, suit: "spades", value: "4", color: "black", icon: "♠" },
    { id: 8, suit: "spades", value: "9", color: "black", icon: "♠" },
    { id: 9, suit: "diamonds", value: "10", color: "red", icon: "♦" },
    { id: 10, suit: "spades", value: "J", color: "black", icon: "♠" },
  ];

  it("sorts data data by suite then value", () => {
    const sortedData = [
      { id: 4, suit: "clubs", value: "4", color: "black", icon: "♣" },
      { id: 1, suit: "clubs", value: "J", color: "black", icon: "♣" },
      { id: 6, suit: "clubs", value: "Q", color: "black", icon: "♣" },
      { id: 3, suit: "clubs", value: "A", color: "black", icon: "♣" },
      { id: 7, suit: "spades", value: "4", color: "black", icon: "♠" },
      { id: 5, suit: "spades", value: "6", color: "black", icon: "♠" },
      { id: 8, suit: "spades", value: "9", color: "black", icon: "♠" },
      { id: 10, suit: "spades", value: "J", color: "black", icon: "♠" },
      { id: 2, suit: "spades", value: "A", color: "black", icon: "♠" },
      { id: 9, suit: "diamonds", value: "10", color: "red", icon: "♦" },
    ];

    expect(sortDeckData(data)).toEqual(sortedData);
  });

  it("handles empty data", () => {
    expect(sortDeckData([])).toEqual([]);
  });

  it("handles no data", () => {
    expect(sortDeckData()).toEqual([]);
  });
});
