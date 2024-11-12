import React from "react";
import { MessageType } from "./chat";
import { v4 } from "uuid";
import { addMessage } from "@/src/features/chat/action";

//import { revalidatePath } from "next/cache";

export default function Form({ messages }: { messages: MessageType[] }) {
  const addMessages = async (formData: FormData) => {
    const content = formData.get("messages")  as string;
    const id: string = v4();
    const userName = "Peter"
    const timeStamp = new Date().toISOString()

    if (content) {
    await addMessage({id, content, userName, timeStamp})
    }
    console.log(messages);
  };

  return (
    <div>
      <form className="flex items-center justify-end" action={addMessages}>
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
