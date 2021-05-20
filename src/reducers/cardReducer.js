import {
  LOAD_DEFAULT_DECK,
  SHUFFLE_DECK,
  DRAW_FROM_CARD_DECK,
  UPDATE_DRAWN_CARDS_DECK,
  SORT_DRAWN_CARDS,
  SAVE_DECK,
  LOAD_SAVED_DECK,
  RESET_DECK,
} from "../actions/cardActions";

export const initialState = {
  cardDeck: [],
  drawnCardsDeck: [],
  deckShuffled: false,
  cardDrawnFromDeck: false,
  cardAddedToDrawnDeck: false,
  drawnDeckSorted: false,
  deckSaved: false,
  savedDeckLoaded: false,
  deckReset: false,
};

export const cardReducer = (state, action) => {
  switch (action.type) {
    case LOAD_DEFAULT_DECK:
      return {
        ...state,
        cardDeck: action.payload,
      };
    case SHUFFLE_DECK:
      return {
        ...state,
        cardDeck: action.payload,
        deckShuffled: true,
        deckSaved: false,
      };
    case DRAW_FROM_CARD_DECK:
      return {
        ...state,
        cardDeck: action.payload,
        cardDrawnFromDeck: true,
      };
    case UPDATE_DRAWN_CARDS_DECK:
      return {
        ...state,
        drawnCardsDeck: [...state.drawnCardsDeck, ...action.payload],
        cardAddedToDrawnDeck: true,
      };
    case SORT_DRAWN_CARDS:
      return {
        ...state,
        drawnCardsDeck: action.payload,
        drawnDeckSorted: true,
      };
    case SAVE_DECK:
      return {
        ...state,
        deckSaved: true,
      };
    case LOAD_SAVED_DECK:
      return {
        ...state,
        ...action.payload,
        savedDeckLoaded: true,
      };
    case RESET_DECK:
      return {
        ...initialState,
        cardDeck: action.payload,
        deckReset: true,
      };
    default:
      return state;
  }
};
