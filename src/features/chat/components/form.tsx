import { addMessage } from "@/src/features/chat/actions";

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
      <button
        className="btn btn-accent m-1 w-full mb-4 md:mb-0 md:w-4/12"
        type="submit"
      >
        Send message
      </button>
    </form>
  );
}
