import { v4 } from "uuid";
import { Repository } from "./repository";
import { MessageType } from "./type";

export function createService(repository: Repository) {
  return {
    async getAllMessages() {
      return repository.getAllMessages();
    },
    async sendMessage(content: string) {
      const id = v4();
      const userId = "9e272678-02e9-445c-a77a-82122fada7da";
      const userName = "Peter";
      const timeStamp = new Date().toISOString();

      const message: MessageType = {
        id: id,
        content: content,
        userId: userId,
        userName: userName,
        timeStamp: timeStamp,
      };
      return repository.sendMessage(message);
    },
    async getAllUserTokens(userId: string) {
      return repository.getAllUserTokens(userId);
    },
    async reduceUserToken(userId: string) {
      repository.reduceUserTokens(userId);
    },
    async setFetchTime(userId: string) {
      repository.setFetchTime(userId);
    },
    async getFetchedDate(userId: string) {
      return repository.getFetchedDate(userId);
    },
    async refillDailyToken(userId: string) {
      return repository.refillDailyToken(userId);
    },
    async refillWeeklyToken(userId: string) {
      return repository.refillWeeklyToken(userId);
    },
  };
}
