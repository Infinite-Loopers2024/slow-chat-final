import React from "react";

export default function ChatPage() {
  return (
    <div>
      <div id="message-placeholder"></div>
      <div id="counter"></div>
      <button>Fetch messages</button>
      <form action="submit">
        <input type="text" id="message" />
        <button>Send message</button>
      </form>
    </div>
  );
}
