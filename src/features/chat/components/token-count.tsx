"use client";
import { revalidateMessages } from "@/src/features/chat/actions";
import { Button } from "./button";

type Props = {
  totalTokens: number;
};

export default function TokenCount({ totalTokens }: Props) {
  return (
    <div className="flex flex-col items-center justify-center md:flex-row md:justify-end md:mt-6">
      <p id="counter" className="mb-1 md:mr-6">
        Tokens <strong className="ml-2">{totalTokens}</strong>
      </p>
      <Button
        style="btn-accent mr-2"
        text="Fetch Messages"
        onClick={() => revalidateMessages()}
      />
    </div>
  );
}
