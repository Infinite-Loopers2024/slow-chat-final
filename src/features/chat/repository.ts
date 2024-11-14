import db from "../../fixtures/messages.json";
import { MessageType } from "./type";
import tokens from "../../fixtures/fetch-tokens.json";

export function createRepository() {
  const data = db;
  const tokenData = tokens;

  return {
    async getAllMessages() {
      return data;
    },
    async sendMessage(message: MessageType) {
      return data.push(message);
    },
    async setFetchedTime(userId: string) {
      const currentUser = tokenData.find(
        (tokenObject) => userId === tokenObject.userId
      );
      currentUser!.timestampsOnFetch.push(new Date().toISOString());
    },
    async getFetchedDate(userId: string) {
      const currentUser = tokenData.find(
        (tokenObject) => userId === tokenObject.userId
      );
      return currentUser!.timestampsOnFetch;
    },
    async getTimestamps(userId: string) {
      const currentUser = tokenData.find(
        (tokenObject) => userId === tokenObject.userId
      );
      return currentUser?.timestampsOnFetch;
    },
  };
}

export type Repository = ReturnType<typeof createRepository>;
