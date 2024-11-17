import { z } from "zod";
import {
  calculateFetchedMessages,
  calculateTotalTokens,
  getDateOfLatestSunday,
  onCooldown,
} from "./logic";
import { Repository } from "./repository";
import type { Message } from "./type";

const Message = z.object({
  content: z.string(),
});

const user_id = "550e8400-e29b-41d4-a716-446655440000";
const userName = "Peter";

export function createService(repository: Repository) {
  return {
    async getFetchedMessages() {
      const messages = await repository.getAllMessages();
      const latestFetchedDate = await repository.getLastFetchedDate(user_id);
      const fetchedMessages = messages.filter(
        (message) => message.timestamp < latestFetchedDate!
      );

      return fetchedMessages;
    },
    async sendMessage(content: string) {
      const timeStamp = new Date().toISOString();

      const validatedMessage = Message.safeParse({ content: content });

      if (!validatedMessage.success) {
        console.log(validatedMessage.error);
      }

      console.log(validatedMessage.data);
      const message: Message = {
        content: validatedMessage.data!.content,
        userId: user_id,
        userName: userName,
        timestamp: timeStamp,
      };
      repository.sendMessage(message);
    },
    async setFetchedTime(userId: string) {
      repository.setFetchedTime(userId);
    },
    async getTokens(userId: string) {
      const currentDate = new Date();
      const todaysDate = new Date();
      const fetchedTimestamps = await repository.getTimestamps(userId);
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
      return await repository.getAllUserMessages();
    },
    async getAllMessagesPerFetch() {
      const allMessages = await repository.getAllMessages();
      const allFetches = await repository.getAllFetches();

      const messagesPerFetch = calculateFetchedMessages(allMessages, allFetches);

      return messagesPerFetch;

    }
  };
}
