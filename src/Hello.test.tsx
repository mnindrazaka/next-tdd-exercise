import { render, screen } from "@testing-library/react";
import { Hello } from "./Hello";

it("render hello world", async () => {
  render(<Hello />);
  expect(
    screen.getByRole("button", { name: "Hello World" })
  ).toBeInTheDocument();
});
