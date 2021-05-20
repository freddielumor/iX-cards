import { shuffleDeckData } from "../helpers/shuffleDeck";
import { sortDeckData } from "../helpers/sortDeck";

export const LOAD_DEFAULT_DECK = "LOAD_DEFAULT_DECK";
export const SHUFFLE_DECK = "SHUFFLE_DECK";
export const DRAW_CARDS = "DRAW_CARDS";
export const DRAW_FROM_CARD_DECK = "DRAW_FROM_CARD_DECK";
export const UPDATE_DRAWN_CARDS_DECK = "UPDATE_DRAWN_CARDS_DECK";
export const SORT_DRAWN_CARDS = "SORT_DRAWN_CARDS";
export const SAVE_DECK = "SAVE_DECK";
export const LOAD_SAVED_DECK = "LOAD_SAVED_DECK";
export const RESET_DECK = "RESET_DECK";

export function loadDefaultDeckAction(payload) {
  return {
    type: LOAD_DEFAULT_DECK,
    payload,
  };
}

export function shuffleDeckAction(payload) {
  const shuffledData = shuffleDeckData(payload);
  return {
    type: SHUFFLE_DECK,
    payload: shuffledData,
  };
}

export function drawFromCardDeckAction(payload) {
  return {
    type: DRAW_FROM_CARD_DECK,
    payload,
  };
}

export function updateDrawnCardsDeckAction(payload) {
  return {
    type: UPDATE_DRAWN_CARDS_DECK,
    payload,
  };
}

export function sortDrawnCardsAction(payload) {
  const sortedData = sortDeckData(payload);
  return {
    type: SORT_DRAWN_CARDS,
    payload: sortedData,
  };
}

export function saveDeckAction() {
  return {
    type: SAVE_DECK,
  };
}

export function laodSavedDeckAction(payload) {
  return {
    type: LOAD_SAVED_DECK,
    payload,
  };
}

export function resetDeckAction(payload) {
  return {
    type: RESET_DECK,
    payload,
  };
}
