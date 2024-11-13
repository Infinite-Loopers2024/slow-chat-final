import { MessageType } from "../type";
import Message from "./message";
import TokenCount from "./token-count";
import { chatFeature } from "../instance";
//import { timeStamp } from "console";

export default async function MessageBoard({
  messages,
}: {
  messages: MessageType[];
}) {
  const currentUserName = "Peter";
  const currentUserId = "9e272678-02e9-445c-a77a-82122fada7da";
  const totalTokens = await chatFeature.service.getAllUserTokens(currentUserId);
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
