import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TodoScreen } from "./TodoScreen";

it("can add new todos and remove it", async () => {
  const user = userEvent.setup();
  render(<TodoScreen />);

  await user.type(screen.getByRole("textbox", { name: "todo" }), "eat");

  await user.click(screen.getByRole("button", { name: "submit" }));
  expect(await screen.findByText("eat")).toBeInTheDocument();

  await user.type(screen.getByRole("textbox", { name: "todo" }), "sleep");
  await user.click(screen.getByRole("button", { name: "submit" }));
  expect(await screen.findByText("sleep")).toBeInTheDocument();

  await user.type(screen.getByRole("textbox", { name: "todo" }), "code");
  await user.click(screen.getByRole("button", { name: "submit" }));
  expect(await screen.findByText("code")).toBeInTheDocument();

  await user.click(screen.getAllByRole("button", { name: "remove" })[0]);
  expect(screen.queryByText("eat")).not.toBeInTheDocument();

  await user.click(screen.getAllByRole("button", { name: "remove" })[0]);
  expect(screen.queryByText("sleep")).not.toBeInTheDocument();

  await user.click(screen.getAllByRole("button", { name: "remove" })[0]);
  expect(screen.queryByText("code")).not.toBeInTheDocument();
});
