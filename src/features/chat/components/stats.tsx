import { chatFeature } from "../instance";
import { FetchCount } from "./fetch-count";
import { MessageCount } from "./message-count";

export async function Stats() {
  const messages = await chatFeature.service.getAllUserMessages();
  const messageCount = await chatFeature.service.getAllMessagesPerFetch();
  return (
    <div className="flex flex-col items-center justify-center md:flex-row md:items-start">
      <MessageCount messages={messages} />
      <FetchCount messageCount={messageCount} />
    </div>
  );
}
