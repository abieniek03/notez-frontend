import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "../../app/page";

describe("Page content render", () => {
  test("Hello", () => {
    render(<Home />);
    const helloText = screen.getByText("Hello!👋");
    expect(helloText).toBeInTheDocument();
  });
});
