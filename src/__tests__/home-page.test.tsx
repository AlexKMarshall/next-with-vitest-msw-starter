import { render, screen, within } from "@testing-library/react";
import HomePage from "src/pages";

test("home", async () => {
  render(<HomePage />);
  const main = within(screen.getByRole("main"));
  expect(
    main.getByRole("heading", { level: 1, name: /welcome to next\.js!/i })
  ).toBeInTheDocument();

  await screen.findByText(/message: john doe/i);
});
