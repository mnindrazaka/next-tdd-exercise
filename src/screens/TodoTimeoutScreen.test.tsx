import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TodoTimeoutScreen } from "./TodoTimeoutScreen";

it("can add new todos and remove it", async () => {
  const user = userEvent.setup();
  render(<TodoTimeoutScreen />);

  await user.type(screen.getByRole("textbox", { name: "todo" }), "eat");

  await user.click(screen.getByRole("button", { name: "submit" }));
  expect(
    await screen.findByText("eat", undefined, { timeout: 5000 })
  ).toBeInTheDocument();

  await user.type(screen.getByRole("textbox", { name: "todo" }), "sleep");
  await user.click(screen.getByRole("button", { name: "submit" }));
  expect(
    await screen.findByText("sleep", undefined, { timeout: 5000 })
  ).toBeInTheDocument();

  await user.type(screen.getByRole("textbox", { name: "todo" }), "code");
  await user.click(screen.getByRole("button", { name: "submit" }));
  expect(
    await screen.findByText("code", undefined, { timeout: 5000 })
  ).toBeInTheDocument();

  await user.click(screen.getAllByRole("button", { name: "remove" })[0]);
  await waitForElementToBeRemoved(() => screen.getByText("eat"), {
    timeout: 5000,
  });
  expect(screen.queryByText("eat")).not.toBeInTheDocument();

  await user.click(screen.getAllByRole("button", { name: "remove" })[0]);
  await waitForElementToBeRemoved(() => screen.getByText("sleep"), {
    timeout: 5000,
  });
  expect(screen.queryByText("sleep")).not.toBeInTheDocument();

  await user.click(screen.getAllByRole("button", { name: "remove" })[0]);
  await waitForElementToBeRemoved(() => screen.getByText("code"), {
    timeout: 5000,
  });
  expect(screen.queryByText("code")).not.toBeInTheDocument();
});
