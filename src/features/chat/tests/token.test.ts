import { describe, it } from "node:test";
import { calculateDailyTokens } from "../logic";
import { deepEqual } from "node:assert";

describe("daily token", () => {
  it("zero fetches should return one", () => {
    const rawlatestFetchDate = "";
    const currentDate = new Date();
    const result = calculateDailyTokens(rawlatestFetchDate, currentDate);
    deepEqual(result, 1);
  });
  it("fetch on same day return zero", () => {
    const rawlatestFetchDate = "2024-11-16 08:24:21.434";
    const currentDate = new Date("2024-11-16 08:24:21.434");
    const result = calculateDailyTokens(rawlatestFetchDate, currentDate);
    deepEqual(result, 0)

  });
  it("feetch on different day should return one", () => {});
});

describe("weekly token", () => {
  it("zero fetches should return two", () => {});
  it("one fetch a day should return two", () => {});
  it("two fetches on the same day should return one", () => {});
  it("three fetches on the same day should return zero", () => {});
});
