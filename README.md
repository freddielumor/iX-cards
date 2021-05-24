# iX-cards

Deck of Cards App

### Run The App

```sh
$ yarn install
```

```sh
$ yarn start
```

### Run Tests

```sh
$ yarn test
```

## App Features

### Shuffle the deck

- Given there are cards in the deck.
- When the user clicks "Shuffle".
- Then the deck should be randomly shuffled.

### Draw cards from the deck

- Given there are cards in the deck.
- When the user click "Draw".
- Then a specified a number of cards should be moved from the deck into the users hand.

### Sort cards in hand

- Given there are cards hand.
- When the user clicks "Sort".
- Then the hand should be sorted by:

* Suit in order: Clubs, Spades, Hearts, Diamonds.
* Value low to high (Aces are high).

### Save local games

- Given the user has shuffled and drawn cards and clicked "save".
- When the user refreshes the page.
- Then the user can resume from my previous state.

### Reset local games

- Given the user has saved a game state.
- When the user clicks "reset",
- Then the game resets with all the cards moved to the deck.

## Technical Features

- React
- Styled Components
- Jest
- React Testing Library
