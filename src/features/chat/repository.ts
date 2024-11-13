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
    async getAllUserTokens(userId: string) {
      const currentUser = tokenData.find(
        (tokenObject) => userId === tokenObject.userId
      );
      const totalTokens = currentUser!.dailyToken + currentUser!.weeklyToken;
      return totalTokens;
    },
  };
}

export type Repository = ReturnType<typeof createRepository>;
