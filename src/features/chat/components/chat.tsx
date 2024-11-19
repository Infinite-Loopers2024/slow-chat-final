import Form from "./form";
import MessageBoard from "./message-board";

export async function ChatPage() {
  return (
    <main className="container mx-auto p-2 rounded-md bg-base-200 mt-2 h-[85lvh] prose">
      <MessageBoard />
      <Form />
    </main>
  );
}
