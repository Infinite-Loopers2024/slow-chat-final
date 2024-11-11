import React from "react";

export default function ChatPage() {
  return (
    <main className="container mx-auto p-2 rounded-md bg-base-200 mt-2 h-[85lvh]">
      <div
        id="message-placeholder"
        className="h-4/6 bg-base-100 rounded-md m-2"
      ></div>
      <div id="counter"></div>
      <button className="btn m-1">Fetch messages</button>
      <form action="submit">
        <input
          className="input input-bordered input-warning w-full max-w-xs"
          placeholder="type here"
          type="text"
          id="message"
        />
        <button className="btn m-1">Send message</button>
      </form>
    </main>
  );
}
