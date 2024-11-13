"use client";
import React from "react";
import { revalidateMessages } from "@/src/features/chat/action";
import tokens from "../../../fixtures/fetch-tokens.json";

export default function TokenCount({
  currentUserName,
}: {
  currentUserName: string;
}) {
  const currentUser = tokens.find((user) => user.userName === currentUserName);
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
