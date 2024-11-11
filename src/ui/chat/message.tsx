import React from "react";

export default function Message({ message }: { message: string }) {
  return (
    <div className="chat chat-start">
      <div className="chat-bubble chat-bubble-primary">
        <p className="p-2">{message}</p>
      </div>
    </div>
  );
}
