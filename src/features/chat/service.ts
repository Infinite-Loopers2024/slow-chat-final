import { v4 } from "uuid";
import { Repository } from "./repository";
import { MessageType } from "./type";
import { calculateTotalTokens, getDateOfLatestSunday } from "./logic";

export function createService(repository: Repository) {
  return {
    async getAllMessages() {
      return repository.getAllMessages();
    },
    async getFetchedMessages() {
      const userId = "9e272678-02e9-445c-a77a-82122fada7da";
      const messages = await repository.getAllMessages();
      const latestFetchedDate = await repository.getLastFetchedDate(userId);
      const fetchedMessages = messages.filter(
        (message) => message.timeStamp < latestFetchedDate
      );

      return fetchedMessages;
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
      return repository.getLastFetchedDate(userId);
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
  };
}
