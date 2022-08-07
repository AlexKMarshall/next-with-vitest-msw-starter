import { expect, test } from "vitest";
import { render, screen, within } from "@testing-library/react";
import HomePage from "../pages";

test("home", () => {
  render(<HomePage />);
  const main = within(screen.getByRole("main"));
  expect(
    main.getByRole("heading", { level: 1, name: /welcome to next\.js!/i })
  ).toBeDefined();

  const footer = within(screen.getByRole("contentinfo"));
  const link = within(footer.getByRole("link"));
  expect(link.getByRole("img", { name: /vercel logo/i })).toBeDefined();
});
