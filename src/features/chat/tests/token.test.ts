import { describe, it } from "node:test";
import { calculateDailyTokens } from "../logic";
import { deepEqual } from "node:assert";

describe("daily token", () => {
  it.only("zero fetches should return one", () => {
    const rowlatestFetchDate = "";
    const currentDate = new Date();
    const result = calculateDailyTokens(rowlatestFetchDate, currentDate);
    deepEqual(result, 1);
  });
  it("fetch on same day return zero", () => {
    // const rowlatestFetchDate = ["2024-11-15 08:24:21.434"];
  });
  it("feetch on different day should return one", () => {});
});

describe("weekly token", () => {
  it("zero fetches should return two", () => {});
  it("one fetch a day should return two", () => {});
  it("two fetches on the same day should return one", () => {});
  it("three fetches on the same day should return zero", () => {});
});
