import React from "react";
import { MessageType } from "./chat";
import { v4 } from "uuid";
import { revalidatePath } from "next/cache";

export default function Form({ messages }: { messages: MessageType[] }) {
  const addMessages = async (formData: FormData) => {
    const content = formData.get("messages");
    const id: string = v4();

    if (content) {
      const newMessage: MessageType = {
        id: id,
        content: content as string,
        userName: "Peter String",
        timeStamp: "2001",
      };
      messages.push(newMessage);
    }
    console.log(messages);
    revalidatePath("/chat");
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
