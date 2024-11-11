import React from "react";

export default function MessageBoard({message}) {
  return (
    <div
      id="message-placeholder"
      className="h-5/6 bg-base-100 rounded-md m-2"
    >{message}</div>
  );
}
