import React from "react";
import { MessageType } from "./chat";

export default function Message({
  message,
  isCurrentUser,
}: {
  message: MessageType;
  isCurrentUser: boolean;
}) {
  const { userName, content } = message;
  const className = isCurrentUser ? "chat chat-start" : "chat chat-end";
  const styling = isCurrentUser
    ? "chat-bubble chat-bubble-primary"
    : "chat-bubble chat-bubble-warning";
  return (
    <div className={className}>
      <div className="chat-header">
        {userName}
        <div className={styling}>
          <p className="p-2">{content}</p>
        </div>
      </div>
    </div>
  );
}
