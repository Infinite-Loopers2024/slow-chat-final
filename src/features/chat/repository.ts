import { MessageType } from "./type";
import tokens from "../../fixtures/fetch-tokens.json";
import { db } from "@/src/index";
import { messages, messageFetchTimestamps } from "@/drizzle/schema";
import { eq } from "drizzle-orm";
import { time } from "console";

export function createRepository() {
  return {
    async getAllMessages() {
      return await db.select().from(messages);
    },
    async sendMessage(message: MessageType) {
      await db.insert(messages).values(message);
    },
    async getUserById(userId: string) {
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
        return timestamps[timestamps.length - 1].timestamp;
      } catch (error) {
        console.log(error);
      }
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
  };
}

export type Repository = ReturnType<typeof createRepository>;
