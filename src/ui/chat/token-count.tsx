"use client"
import React from "react";
import {revalidateMessages } from "@/src/features/chat/action";

export default function TokenCount() {
  return (
    <>
      <div id="counter" className="mr-20">
        token:3
      </div>
      <button onClick={() => revalidateMessages()} className="btn btn-secondary m-1 w-52">
        Fetch messages
      </button>
    </>
  );
}
