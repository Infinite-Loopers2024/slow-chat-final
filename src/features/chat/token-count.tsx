"use client";
import React from "react";
import { revalidateMessages } from "@/src/features/chat/action";
import tokens from "../../fixtures/fetch-tokens.json"

export default function TokenCount({currentUserId}:{currentUserId: string}) {
  const currentUser = tokens.find((user)=>user.id === currentUserId)
  return (
    <>
      <div id="counter" className="mr-20">
        token: {currentUser!.dailyToken + currentUser!.weeklyToken}
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
