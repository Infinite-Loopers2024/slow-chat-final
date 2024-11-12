import React from "react";
import { MessageType } from "./chat";
// import { v4 } from "uuid";

type FormProps = { addMessage: (message: string) => MessageType };

export default function Form({ addMessage }: FormProps) {
  const addMessages = async (formData: FormData) => {
    const texts = formData.get("messages");
    if (texts) {
      addMessage(texts as string);
    }
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
