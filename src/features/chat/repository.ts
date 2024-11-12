import { getAllMessages } from "./action";
import db from "../../fixtures/messages.json";

export function createRepository() {
  const data = db;

  return {
    async getAllMessages() {
      return data;
    },
  };
}
