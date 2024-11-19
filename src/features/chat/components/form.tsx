import { addMessage } from "@/src/features/chat/actions";
import { Button } from "./button";

export default function Form() {
  return (
    <form
      className="flex flex-col items-center justify-center md:flex-row md:justify-end md:mt-6"
      action={addMessage}
    >
      <input
        className="input input-bordered input-accent w-full m-3"
        placeholder="type here"
        type="text"
        id="content"
        name="content"
      />
      <Button style="btn-accent mr-2" text="Send Message" type="submit" />
    </form>
  );
}
