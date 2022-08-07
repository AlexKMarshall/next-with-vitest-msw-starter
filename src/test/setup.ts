import "@testing-library/jest-dom";
import { server } from "./mocks/server.js";
import "whatwg-fetch";

beforeAll(() => {
  server.listen({ onUnhandledRequest: "error" });
});
afterEach(() => {
  server.resetHandlers();
});
afterAll(() => {
  server.close();
});
