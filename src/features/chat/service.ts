import { v4 } from "uuid";
import { Repository } from "./repository";
import { MessageType } from "./type";

export function createService(repository: Repository) {
  return {
    async getAllMessages() {
      return repository.getAllMessages();
    },
    async sendMessage(content: string) {
      const id: string = v4();
      const userName = "Peter";
      const timeStamp = new Date().toISOString();

      const message: MessageType = {
        id: id,
        content: content,
        userName: userName,
        timeStamp: timeStamp,
      };
      return repository.sendMessage(message);
    },
    async getAllUserTokens(userName: string) {
      return repository.getAllUserTokens(userName);
    },
  };
}
