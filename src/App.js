import React from "react";
import CardProvider from "./context/cardContext";
import Home from "./pages/Home";
import "./styles/base/index.scss";

function App() {
  return (
    <CardProvider>
      <Home />
    </CardProvider>
  );
}
export default App;
