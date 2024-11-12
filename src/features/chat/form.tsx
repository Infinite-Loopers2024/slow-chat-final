import React from "react";
import { addMessage } from "@/src/feature/chat/action";

//import { revalidatePath } from "next/cache";

export default function Form() {
  return (
    <div>
      <form className="flex items-center justify-end" action={addMessage}>
        <input
          className="input input-bordered input-warning w-full max-w-xs m-3"
          placeholder="type here"
          type="text"
          id="message"
          name="messages"
        />
        <button className="btn btn-secondary m-1 w-52" type="submit">
          Send message
        </button>
      </form>
    </div>
  );
}