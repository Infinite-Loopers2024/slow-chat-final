import React from "react";
import Message from "./message";

export default function MessageBoard({ messages }: { messages: string[] }) {
  return (
    <div id="message-placeholder" className="h-5/6 bg-base-100 rounded-md m-2">
      {messages.map((message, index) => (
        <Message key={index} message={message} />
      ))}
    </div>
  );
}
