import { deepEqual } from "assert";
import { describe, it } from "node:test";
import { onCooldown } from "../logic";

describe("Check if message is on coldown", () => {
  it("Should be on coldown", () => {
    const timestamp = "2024-11-16 10:24:21.434";
    const result = onCooldown(timestamp, new Date("2024-11-16 11:24:21.434"));
    deepEqual(result, true);
  });
  it("Should NOT be on coldown", () => {
    const timestamp = "2024-11-16 10:24:21.434";
    const result = onCooldown(timestamp, new Date("2024-11-16 11:24:21.434"));
    deepEqual(result, false);
  });
});
