"use client";

import { useState } from "react";
import { createMessage } from "./action";

export default function ChatPage() {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState<string[]>([]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setMessage((prevmessage) => [...prevmessage, input]);
    console.log(message)
  };

  return (
    <main className="container mx-auto pb-6 p-2 rounded-md bg-base-200 mt-2 h-[85lvh]">
      <div
        id="message-placeholder"
        className="h-5/6 bg-base-100 rounded-md m-2"
      ></div>
      <div className="flex items-center justify-end">
        <div id="counter" className="mr-20">
          token:3
        </div>
        <button className="btn btn-secondary m-1 w-52">Fetch messages</button>
      </div>
      <form className="flex items-center justify-end" onSubmit={handleSubmit}>
        <input
          className="input input-bordered input-warning w-full max-w-xs m-3"
          placeholder="type here"
          type="text"
          id="message"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btn btn-secondary m-1 w-52" type="submit">
          Send message
        </button>
      </form>
    </main>
  );
}
