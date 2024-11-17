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
  it("should return 1 message on cooldown", () => {
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
  it("should return 1 message fetched", () => {
    const allMessages: Message[] = [
      {
        content: "hej",
        userId: "550e8400-e29b-41d4-a716-446655440000",
        userName: "peter",
        timestamp: "2024-11-15 06:23:15.434",
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
        fetchCount: 1,
        messagesOnCooldown: 0,
      },
    ]);
  });
  it("should return 1 message fetched & 1 on cooldown", () => {
    const allMessages: Message[] = [
      {
        content: "hej1",
        userId: "550e8400-e29b-41d4-a716-446655440000",
        userName: "peter",
        timestamp: "2024-11-15 06:23:15.434",
      },
      {
        content: "hej2",
        userId: "550e8400-e29b-41d4-a716-446655440000",
        userName: "peter",
        timestamp: "2024-11-15 07:23:15.434",
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
        fetchCount: 1,
        messagesOnCooldown: 1,
      },
    ]);
  });
  it("should return 2 fetches with 1 message fetched & 1 on cooldown", () => {
    const allMessages: Message[] = [
      {
        content: "hej1",
        userId: "550e8400-e29b-41d4-a716-446655440000",
        userName: "peter",
        timestamp: "2024-11-14 05:23:15.434",
      },
      {
        content: "hej2",
        userId: "550e8400-e29b-41d4-a716-446655440000",
        userName: "peter",
        timestamp: "2024-11-14 07:23:15.434",
      },
      {
        content: "hej1",
        userId: "550e8400-e29b-41d4-a716-446655440000",
        userName: "peter",
        timestamp: "2024-11-15 06:23:15.434",
      },
      {
        content: "hej2",
        userId: "550e8400-e29b-41d4-a716-446655440000",
        userName: "peter",
        timestamp: "2024-11-15 07:23:15.434",
      },
    ];
    const allFetches: FetchTimestamp[] = [
      {
        timestamp: "2024-11-14 07:24:22.434",
      },
      {
        timestamp: "2024-11-15 08:24:22.434",
      },
    ];

    const result = calculateFetchedMessages(allMessages, allFetches);

    deepEqual(result, [
      {
        fetchDate: { timestamp: "2024-11-14 07:24:22.434" },
        fetchCount: 1,
        messagesOnCooldown: 1,
      },
      {
        fetchDate: { timestamp: "2024-11-15 08:24:22.434" },
        fetchCount: 1,
        messagesOnCooldown: 1,
      },
    ]);
  });
});
