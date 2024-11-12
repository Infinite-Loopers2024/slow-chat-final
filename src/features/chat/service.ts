import { getAllMessages } from "./action";
import { Repository } from "./repository";

export function createService(repository: Repository) {
  return {
    async getAllMessages() {
      return repository.getAllMessages();
    },
  };
}
