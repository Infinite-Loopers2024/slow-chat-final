import { revalidatePath } from "next/cache";
import React from "react";
// import { v4 } from "uuid";

export default function Form({ addMessage }: any) {
  const addMessages = async (formData: FormData) => {
    "use server";
    const messages = Object.fromEntries(formData.entries());
    if (messages) {
      addMessage({ content: messages.messages });
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
