import { MessageType } from "../type";
import Message from "./message";
import TokenCount from "./token-count";
import { handleTokens } from "../actions";

export default async function MessageBoard({
  messages,
}: {
  messages: MessageType[];
}) {
  const currentUserName = "Peter";
  const totalTokens = await handleTokens();
  return (
    <>
      <div
        id="message-placeholder"
        className="h-4/6 bg-base-100 rounded-md m-2 overflow-auto flex flex-col-reverse"
      >
        {messages.map((message) => (
          <Message
            key={message.id}
            message={message}
            isCurrentUser={message.userName === currentUserName}
            time={message.timeStamp.slice(11,16)}
          />
        ))}
      </div>
      <TokenCount totalTokens={totalTokens} />
    </>
  );
}
