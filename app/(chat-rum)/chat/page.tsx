import React from "react";
import "./styles.css";

export default function ChatPage() {
  return (
    <div className="container mx-auto p-2 rounded-md">
      <div id="message-placeholder"></div>
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
    </div>
  );
}
