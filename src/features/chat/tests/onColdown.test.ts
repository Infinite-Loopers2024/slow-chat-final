import { deepEqual } from "assert";
import { describe, it } from "node:test";
import { isAvailable } from "../logic";

describe("Check if message is on cooldown", () => {
  it("Should be on cooldown", () => {
    const timestamp = "2024-11-16 10:24:20.434";
    const currentDate = new Date("2024-11-16 11:24:21.434");
    const result = isAvailable(timestamp, currentDate);
    deepEqual(result, false);
  });
  it("Should NOT be on cooldown", () => {
    const timestamp = "2024-11-16 10:23:21.433";
    const newDate = new Date("2024-11-16 11:24:21.434");
    const result = isAvailable(timestamp, newDate);
    deepEqual(result, true);
  });
});
