import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import CardProvider from "../../context/cardContext";
import Home from "../Home";

describe("<Home />", () => {
  const setupTests = () => {
    const props = {};

    return render(
      <CardProvider>
        <Home {...props} />
      </CardProvider>
    );
  };

  it("renders Home component", async () => {
    const { getByText, findByTestId } = setupTests();

    await findByTestId("home");
    expect(getByText("iX Cards")).toBeInTheDocument();
  });

  it("renders Shuffle button", async () => {
    const onClick = jest.fn();
    const { getByRole } = setupTests({ onClick });

    const shuffleButton = getByRole("button", { name: /shuffle/i });
    expect(shuffleButton).toBeInTheDocument();
  });

  it("renders CardDeck component", async () => {
    const { findByTestId } = setupTests();

    await findByTestId("cardDeck");
  });

  it("renders Card component with all suits", async () => {
    const { findAllByTestId } = setupTests();

    await findAllByTestId("card card-hearts");
    await findAllByTestId("card card-diamonds");
    await findAllByTestId("card card-clubs");
    await findAllByTestId("card card-spades");
  });

  it("renders Save button", async () => {
    const onClick = jest.fn();
    const { getByRole } = setupTests({ onClick });

    const saveButton = getByRole("button", { name: /save/i });
    expect(saveButton).toBeInTheDocument();
  });

  it("renders Reset button", async () => {
    const onClick = jest.fn();
    const { getByRole } = setupTests({ onClick });

    const resetButton = getByRole("button", { name: /reset/i });
    expect(resetButton).toBeInTheDocument();
  });

  it("renders DrawCards component", async () => {
    const { findByTestId } = setupTests();

    await findByTestId("draw-cards");
  });

  it("handles DrawCards input change", async () => {
    const { getByTestId } = setupTests();

    const drawCardInput = getByTestId("drawCardFormInput");
    fireEvent.change(drawCardInput, { target: { value: "10" } });
    expect(drawCardInput.value).toBe("10");
  });

  it("renders Draw button", async () => {
    const onClick = jest.fn();
    const { getByRole } = setupTests({ onClick });

    const drawButton = getByRole("button", { name: /draw/i });
    expect(drawButton).toBeInTheDocument();
  });

  it("does not render MyCards component on mount", async () => {
    const { queryByTestId } = setupTests();

    expect(queryByTestId("myCards")).not.toBeInTheDocument();
  });

  it("renders MyCards component when draw button is clicked", async () => {
    const { queryByTestId, getByRole } = setupTests();

    const drawButton = getByRole("button", { name: /draw/i });
    fireEvent.click(drawButton);

    expect(queryByTestId("my-cards")).toBeInTheDocument();
  });
});
