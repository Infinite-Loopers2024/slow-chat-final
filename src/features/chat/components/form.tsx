import { addMessage } from "@/src/features/chat/actions";

export default function Form() {
  return (
    <div>
      <form className="flex flex-col items-center justify-center" action={addMessage}>
        <input
          className="input input-bordered input-accent w-full m-3"
          placeholder="type here"
          type="text"
          id="content"
          name="content"
        />
        <button className="btn btn-accent m-1 w-full mb-4" type="submit">
          Send message
        </button>
      </form>
    </div>
  );
}
