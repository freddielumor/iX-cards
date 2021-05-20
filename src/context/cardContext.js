import React, { createContext, useReducer } from "react";
import { cardReducer, initialState } from "../reducers/cardReducer";

export const CardContext = createContext({});

const CardProvider = ({ children }) => {
  const [cards, dispatch] = useReducer(cardReducer, initialState);

  return (
    <CardContext.Provider value={{ cards, dispatch }}>
      {children}
    </CardContext.Provider>
  );
};

export default CardProvider;
