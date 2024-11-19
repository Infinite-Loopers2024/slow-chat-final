import { messageFetchTimestamps, messages } from "@/drizzle/schema";
import { Db } from "@/src";
import { count, eq } from "drizzle-orm";
import { Message } from "./type";



export function createRepository(
  db: Db
) {
  return {
    async getAllMessages() {
      return await db.select().from(messages);
    },
    async sendMessage(message: Message) {
      await db.insert(messages).values(message);
    },
    async getUser(userId: string) {
      return await db
        .select()
        .from(messages)
        .where(eq(messages.userId, userId));
    },
    async setFetchedTime(userId: string) {
      const newValues = {
        userId: userId,
        timestamp: new Date().toISOString(),
      };
      await db.insert(messageFetchTimestamps).values(newValues);
    },
    async getLastFetchedDate(userId: string) {
      try {
        const timestamps = await db
          .select({ timestamp: messageFetchTimestamps.timestamp })
          .from(messageFetchTimestamps)
          .where(eq(messageFetchTimestamps.userId, userId));
        if (timestamps.length !== 0) {
          return timestamps[timestamps.length - 1].timestamp;
        }
      } catch (error) {
        console.error(error);
      }
    },

    async getAllFetches() {
      return await db
        .select({ timestamp: messageFetchTimestamps.timestamp })
        .from(messageFetchTimestamps);
    },

    async getTimestamps(userId: string) {
      const timestamps = await db
        .select({ timestamp: messageFetchTimestamps.timestamp })
        .from(messageFetchTimestamps)
        .where(eq(messageFetchTimestamps.userId, userId));

      const timestamp = timestamps.map((time) => {
        return time.timestamp;
      });
      return timestamp;
    },
    async getAllUserMessages() {
      const numberMessagesPerUser = await db
        .select({ userName: messages.userName, count: count(messages.id) })
        .from(messages)
        .groupBy(messages.userId, messages.userName);
      return numberMessagesPerUser;
    },
  };
}

export type Repository = ReturnType<typeof createRepository>;
