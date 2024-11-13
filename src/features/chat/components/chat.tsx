import Form from "./form";
import MessageBoard from "./message-board";
import { getFetchedMessages } from "../actions";

export async function ChatPage() {
  const messages = await getFetchedMessages(date)
  return (
    <main className="container mx-auto p-2 rounded-md bg-base-200 mt-2 h-[85lvh] prose">
      <MessageBoard messages={messages} />
      <div className="flex items-center justify-end"></div>
      <Form />
    </main>
  );
}
