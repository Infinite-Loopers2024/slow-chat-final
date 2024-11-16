import { Repository } from "./repository";
import { Message } from "./type";
import { calculateTotalTokens, getDateOfLatestSunday } from "./logic";

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

      const message: Message = {
        content: content,
        userId: user_id,
        userName: userName,
        timestamp: timeStamp,
      };
      return repository.sendMessage(message);
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
    
  };
}
