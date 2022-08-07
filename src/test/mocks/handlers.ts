import { rest } from "msw";

export const handlers = [
  rest.get("/api/message", (req, res, ctx) => {
    return res(ctx.json({ message: "John Doe" }));
  }),
];
