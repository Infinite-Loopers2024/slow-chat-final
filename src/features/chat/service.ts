import { v4 } from "uuid";
import { Repository } from "./repository";
import { MessageType } from "./type";
import {calculateTotalTokens } from "./logic";

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
    async setFetchedTime(userId: string) {
      repository.setFetchedTime(userId);
    },
    async getFetchedDate(userId: string) {
      return repository.getFetchedDate(userId);
    },
    async getTokens(userId: string) {
      const currentDate = new Date().toISOString();
      const fetchedTimestamps = repository.getTimestamps(userId);
      //filter timestamps on sunday
      const latestFetchedDate: string[] = [];
      const totalTokens = calculateTotalTokens(latestFetchedDate, currentDate);
      return totalTokens;
    },
  };
}
