import React from "react";
import { MessageType } from "./chat";

export default function Message({ message }: { message: MessageType }) {
  return (
    <div className="chat chat-start">
      <div className="chat-header">
        {message.userName}
        <div className="chat-bubble chat-bubble-primary">
          <p className="p-2">{message.content}</p>
        </div>
      </div>
    </div>
  );
}
