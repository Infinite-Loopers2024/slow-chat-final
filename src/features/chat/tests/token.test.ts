import { deepEqual } from "node:assert";
import { describe, it } from "node:test";
import { calculateDailyTokens, calculateWeeklyTokens } from "../logic";

describe("daily token", () => {
  it("zero fetches should return one", () => {
    const rawlatestFetchDate = "";
    const currentDate = new Date("2024-11-16 08:24:21.434");
    const result = calculateDailyTokens(rawlatestFetchDate, currentDate);
    deepEqual(result, 1);
  });
  it("fetch on same day return zero", () => {
    const rawlatestFetchDate = "2024-11-16 08:24:21.434";
    const currentDate = new Date("2024-11-16 08:24:21.434");
    const result = calculateDailyTokens(rawlatestFetchDate, currentDate);
    deepEqual(result, 0);
  });
  it("fetch on different day should return one", () => {
    const rawlatestFetchDate = "2024-11-15 08:24:21.434";
    const currentDate = new Date("2024-11-16 08:24:21.434");
    const result = calculateDailyTokens(rawlatestFetchDate, currentDate);
    deepEqual(result, 1);
  });
});

describe("weekly token", () => {
  it("zero fetches should return two", () => {
    const fetchDates: string[] = [];
    const result = calculateWeeklyTokens(fetchDates);
    deepEqual(result, 2);
  });
  it("one fetch a day should return two", () => {
    const fetchDates: string[] = ["2024-11-15 08:24:21.434"];
    const result = calculateWeeklyTokens(fetchDates);
    deepEqual(result, 2);
  });
  it("two fetches on the same day should return one", () => {
     const fetchDates: string[] = [
       "2024-11-15 08:24:21.434",
       "2024-11-15 08:24:21.434",
     ];
     const result = calculateWeeklyTokens(fetchDates);
     deepEqual(result, 1);
  });
  it("three fetches on the same day should return zero", () => {
    const fetchDates: string[] = [
      "2024-11-15 08:24:21.434",
      "2024-11-15 08:24:21.434",
      "2024-11-15 08:24:21.434"
    ];
    const result = calculateWeeklyTokens(fetchDates);
    deepEqual(result, 0);
  });
});
