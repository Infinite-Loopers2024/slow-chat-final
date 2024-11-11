import React from "react";
import "./styles.css"

export default function ChatPage() {
  return (
    <div className="container mx-auto">
      <div id="message-placeholder"></div>
      <div id="counter"></div>
      <button>Fetch messages</button>
      <form action="submit">
        <input className="input input-bordered input-warning w-full max-w-xs" placeholder="type here" type="text" id="message" />
        <button>Send message</button>
      </form>
    </div>
  );
}
