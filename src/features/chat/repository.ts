import db from "../../fixtures/messages.json";
import { MessageType } from "./type";

export function createRepository() {
  const data = db;

  return {
    async getAllMessages() {
      return data;
    },
    async sendMessage(message: MessageType) {
      return data.push(message);
    },
  };
}

export type Repository = ReturnType<typeof createRepository>;
