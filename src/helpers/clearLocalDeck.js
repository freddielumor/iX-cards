export const clearLocalDeckData = (data) => {
  if (!data) return;

  const savedLocalData = localStorage.getItem("cardData");

  if (savedLocalData && data.deckReset) {
    localStorage.removeItem("cardData");
  }
};
