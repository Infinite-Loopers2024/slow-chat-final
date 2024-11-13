"use client";
import React from "react";
import { revalidateMessages } from "@/src/features/chat/actions";

export default function TokenCount({ totalTokens }: { totalTokens: number }) {
  return (
    <>
      <div id="counter" className="mr-20">
        token: {totalTokens}
      </div>
      <button
        onClick={() => revalidateMessages()}
        className="btn btn-secondary m-1 w-52"
      >
        Fetch messages
      </button>
    </>
  );
}
