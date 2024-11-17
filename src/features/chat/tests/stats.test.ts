import { deepEqual } from "assert";
import { describe, it } from "node:test";
import { calculateFetchedMessages } from "../logic";
import { FetchTimestamp, Message } from "../type";

describe("calculatefetchmessages ", () => {
  it("should return empty array", () => {
    const allMessages: Message[] = [];
    const allFetches: FetchTimestamp[] = [];

    const result = calculateFetchedMessages(allMessages, allFetches);

    deepEqual(result, []);
  });
  it("should 1 message on cooldown", () => {
    const allMessages: Message[] = [
      {
        content: "hej",
        userId: "550e8400-e29b-41d4-a716-446655440000",
        userName: "peter",
        timestamp: "2024-11-15 08:24:15.434",
      },
    ];
    const allFetches: FetchTimestamp[] = [
      {
        timestamp: "2024-11-15 08:24:22.434",
      },
    ];

    const result = calculateFetchedMessages(allMessages, allFetches);

    deepEqual(result, [
      {
        fetchDate: { timestamp: "2024-11-15 08:24:22.434" },
        fetchCount: 0,
        messagesOnCooldown: 1,
      },
    ]);
  });
});
