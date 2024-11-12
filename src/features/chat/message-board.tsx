import React from "react";
import { MessageType } from "./chat";
import Message from "./message";
import TokenCount from "./token-count";
//import { timeStamp } from "console";

export default function MessageBoard({
  messages,
}: {
  messages: MessageType[];
}) {
  const currentUserId = "1"
  return (
    <>
      <div
        id="message-placeholder"
        className="h-5/6 bg-base-100 rounded-md m-2 overflow-auto flex flex-col-reverse"
      >
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      <TokenCount currentUserId = {currentUserId}/>
    </>
  );
}
