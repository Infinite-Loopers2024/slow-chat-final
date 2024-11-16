import { z } from "zod";
import {
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

      const message: Message = {
        content: content,
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
    async getAllUserMessageById() {
      return await repository.getAllUserMessageById();
    },
    async getAllMessagePerFetch() {
      const allMessages = await repository.getAllMessages();
      const getAllFetches = await repository.getAllFetches();

      const messagesPerFetch = [];
      let onCooldownMessags = 0;
      let messageCount = 0;

      for (let i = 0; i < getAllFetches.length; i++) {
        messageCount = 0;
        onCooldownMessags = 0;
        for (let n = 0; n < allMessages.length; n++) {
          if (i === 0) {
            if (allMessages[n].timestamp < getAllFetches[i].timestamp) {
              messageCount++;
            }
          } else {
            if (
              allMessages[n].timestamp < getAllFetches[i].timestamp &&
              allMessages[n].timestamp > getAllFetches[i - 1].timestamp
            ) {
              if (
                onCooldown(
                  allMessages[n].timestamp,
                  new Date(getAllFetches[i].timestamp)
                )
              ) {
                onCooldownMessags++;
              }
              messageCount++;
            }
          }
        }
        messagesPerFetch.push({
          fetchDate: getAllFetches[i],
          fetchCount: messageCount - onCooldownMessags,
          messagesOnCooldown: onCooldownMessags,
        });
      }
      return messagesPerFetch;
    },
  };
}
