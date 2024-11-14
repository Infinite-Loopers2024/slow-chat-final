"use client";
import { revalidateMessages } from "@/src/features/chat/actions";

export default function TokenCount({ totalTokens }: { totalTokens: number }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div id="counter" className="mb-1">
          Remaining token: {totalTokens}
        </div>
        <button
          onClick={() => revalidateMessages()}
          className="btn btn-accent m-1 w-full"
        >
          Fetch messages
        </button>
      </div>
    </>
  );
}
