import { z } from "zod";
import {
  calculateFetchedMessages,
  calculateTotalTokens,
  getDateOfLatestSunday,
  onCooldown,
} from "./logic";
import { createRepository } from "./repository";
import type { Message } from "./type";
import { Db } from "@/src";

const Message = z.object({
  content: z.string(),
});

const user_id = "550e8400-e29b-41d4-a716-446655440000";
const userName = "Peter";

export function createService(db: Db) {
  const repository = createRepository(db);

  return {
    async getFetchedMessages() {
      const messages = await repository.getAllMessages();
      const latestFetchedDate = await repository.getLastFetchedDate(user_id);
      const fetchedMessages = messages.filter(
        (message) => message.timestamp < latestFetchedDate!
      );
      const currentDate = new Date();

      const validMessages = fetchedMessages.map((message) => {
        if (onCooldown(message.timestamp, currentDate)) {
          message.content = "";
        }
        return message;
      });

      return validMessages;
    },
    async sendMessage(content: string) {
      const timeStamp = new Date().toISOString();

      const validatedMessage = Message.safeParse({ content: content });

      if (!validatedMessage.success) {
        console.log(validatedMessage.error);
      }

      const message: Message = {
        content: validatedMessage.data!.content,
        userId: user_id,
        userName: userName,
        timestamp: timeStamp,
      };
      repository.sendMessage(message);
    },
    async setFetchTime(userId: string) {
      repository.setFetchTime(userId);
    },

    async getTokens(userId: string) {
      const currentDate = new Date();
      const todaysDate = new Date();
      const fetchedTimestamps = await repository.getUserTimestamps(userId);
      const latestSunday = getDateOfLatestSunday(currentDate);
      const latestFetchedDate: string[] = fetchedTimestamps!.filter(
        (timestamps) => latestSunday < timestamps
      );
      const totalTokens = calculateTotalTokens(latestFetchedDate, todaysDate);
      return totalTokens;
    },

    checkIfOnCooldown(timestamp: string) {
      const currentDate = new Date();
      return onCooldown(timestamp, currentDate);
    },

    async getAllUserMessages() {
      return await repository.getAllUsersMessageCount();
    },

    async getAllMessagesPerFetch() {
      const allMessages = await repository.getAllMessages();
      const allTimestamps = await repository.getAllTimestamps();

      const messagesPerFetch = calculateFetchedMessages(
        allMessages,
        allTimestamps
      );

      return messagesPerFetch;
    },
  };
}
