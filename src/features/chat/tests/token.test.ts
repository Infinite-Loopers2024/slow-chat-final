import { describe, it } from "node:test"

describe("daily token", () => {
  it("zero fetches should return one", () => {});
  it("fetch on same day return zero", () => {});
  it("feetch on different day should return one", () => {});
});

describe("weekly token", () => {
  it("zero fetches should return two", () => {});
  it("one fetch a day should return two", () => {});
  it("two fetches on the same day should return one", () => {});
  it("three fetches on the same day should return zero", () => {});
});
