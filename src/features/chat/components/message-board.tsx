import { chatFeature } from "../instance";
import type { Message } from "../type";
import { Message as MessageComponent } from "./message";
import TokenCount from "./token-count";

type Props = {
  messages: Message[];
};

export default async function MessageBoard({ messages }: Props) {
  const currentUserName = "Peter";
  const userId = "550e8400-e29b-41d4-a716-446655440000";
  const totalTokens = await chatFeature.service.getTokens(userId);
  return (
    <>
      <div
        id="message-placeholder"
        className="h-4/6 bg-base-100 rounded-md m-2 overflow-auto flex flex-col"
      >
        {messages.map((message, index) => (
          <MessageComponent
            key={index}
            message={message}
            isCurrentUser={message.userName === currentUserName}
            time={message.timestamp.slice(11, 16)}
          />
        ))}
      </div>
      <TokenCount totalTokens={totalTokens} />
    </>
  );
}
