import Form from "./form";

export default function ChatPage() {
  return (
    <main className="container mx-auto pb-6 p-2 rounded-md bg-base-200 mt-2 h-[85lvh]">
      <div
        id="message-placeholder"
        className="h-5/6 bg-base-100 rounded-md m-2"
      ></div>
      <div className="flex items-center justify-end">
        <div id="counter" className="mr-20">
          token:3
        </div>
        <button className="btn btn-secondary m-1 w-52">Fetch messages</button>
      </div>
      <Form />
    </main>
  );
}
