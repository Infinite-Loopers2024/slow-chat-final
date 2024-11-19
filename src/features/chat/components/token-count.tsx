"use client";
import { revalidateMessages } from "@/src/features/chat/actions";
import { Button } from "./button";

type Props = {
  totalTokens: number;
};

export default function TokenCount({ totalTokens }: Props) {
  return (
    <div className="flex flex-col items-center justify-center md:flex-row md:justify-end md:mt-6">
      <div id="counter" className="mb-1 md:mr-3">
        Remaining token <strong>{totalTokens}</strong>
      </div>
      <Button
        color="btn-accent"
        text="Fetch Messages"
        onClick={() => revalidateMessages()}
      />
    </div>
  );
}
