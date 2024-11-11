'use client'
import { useState } from "react";
import Form from "./form";
import MessageBoard from "./message-board";
import TokenCount from "./token-count";

export default function ChatPage() {
   const [message, setMessage] = useState<string[]>([]);
  const addMessage = (newMessage: string) => {
    setMessage((prevmessage) => [...prevmessage, newMessage]);
  }
   return (
    <main className="container mx-auto pb-6 p-2 rounded-md bg-base-200 mt-2 h-[85lvh]">
      <MessageBoard messages={message} />
      <div className="flex items-center justify-end">
        <TokenCount />
      </div>
      <Form addMessage={addMessage} />
    </main>
  );
}
