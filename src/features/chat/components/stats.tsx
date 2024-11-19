import { chatService } from "../instance";
import { FetchCount } from "./fetch-count";
import { MessageCount } from "./message-count";

export async function Stats() {
  const messages = await chatService.getAllUserMessages();
  const messageCount = await chatService.getAllMessagesPerFetch();
  return (
    <div className="flex flex-col items-center justify-center md:flex-row md:items-start">
      <MessageCount messages={messages} />
      <FetchCount messageCount={messageCount} />
    </div>
  );
}
