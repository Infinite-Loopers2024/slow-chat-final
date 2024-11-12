import React from "react";
import { MessageType } from "./chat";
import { getAllMessages } from "@/src/features/chat/action";

export default function TokenCount(message: MessageType) {
  function handleClick() {
    const data = getAllMessages();
    return;
  }
  return (
    <>
      <div id="counter" className="mr-20">
        token:3
      </div>
      <button onClick={handleClick()} className="btn btn-secondary m-1 w-52">
        Fetch messages
      </button>
    </>
  );
}
