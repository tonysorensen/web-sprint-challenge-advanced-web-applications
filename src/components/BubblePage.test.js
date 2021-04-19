import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";

test("Renders BubblePage without errors", () => {
  // Finish this test
  render(<BubblePage />);
});

test("Fetches data and renders the bubbles on mounting", async () => {
  // Finish this test
  //sanity checked with expect(bubbles).toBeUndefined();
  // title of "bubbles" was set on SVG component in Bubbles.js
  render(<BubblePage />);
  const bubbles = screen.getByTitle(/bubbles/i);
  await waitFor(() => {
    expect(bubbles).toBeDefined();
  });
});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading
