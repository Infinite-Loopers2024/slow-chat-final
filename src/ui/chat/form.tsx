
import React, { useState } from "react";
type FormProps = {addMessage: (message: string) => void}
export default function Form({addMessage}: FormProps) {
  const [input, setInput] = useState("");
 

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    addMessage(input)
    setInput("");
  };
  return (
    <div>
      <form className="flex items-center justify-end" onSubmit={handleSubmit}>
        <input
          className="input input-bordered input-warning w-full max-w-xs m-3"
          placeholder="type here"
          type="text"
          id="message"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btn btn-secondary m-1 w-52" type="submit">
          Send message
        </button>
      </form>
    </div>
  );
}
