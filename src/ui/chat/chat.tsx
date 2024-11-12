"use client";
import { useState } from "react";
import Form from "./form";
import MessageBoard from "./message-board";
import TokenCount from "./token-count";
import db from "../../fixtures/messages.json";

export type MessageType = {
  id: string;
  content: string;
  userName: string;
  timeStamp: string;
};

export default function ChatPage() {
  const [message, setMessage] = useState<string[]>([]);
  const messages = db as MessageType[];
  console.log(messages);

  const addMessage = (newMessage: MessageType) => {
    db.push(newMessage);
  };
  return (
    <main className="container mx-auto pb-6 p-2 rounded-md bg-base-200 mt-2 h-[85lvh]">
      <MessageBoard messages={messages} />
      <div className="flex items-center justify-end">
        <TokenCount />
      </div>
      <Form addMessage={addMessage} />
    </main>
  );
}
