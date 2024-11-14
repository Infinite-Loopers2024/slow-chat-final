"use client";
import { revalidateMessages } from "@/src/features/chat/actions";

export default function TokenCount({ totalTokens }: { totalTokens: number }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center md:flex-row md:justify-end md:mt-6">
        <div id="counter" className="mb-1 md:mr-3">
          Remaining token: {totalTokens}
        </div>
        <button
          onClick={() => revalidateMessages()}
          className="btn btn-accent m-1 w-full md:w-4/12"
        >
          Fetch messages
        </button>
      </div>
    </>
  );
}
