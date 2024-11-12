import { Repository } from "./repository";
import { MessageType } from "./type";

export function createService(repository: Repository) {
  return {
    async getAllMessages() {
      return repository.getAllMessages();
    },
    async sendMessage(message: MessageType) {
      return repository.sendMessage(message);
    },
  };
}
