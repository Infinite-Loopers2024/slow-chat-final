import Form from "./form";
import MessageBoard from "./message-board";
import { getFetchedMessages } from "../actions";
import { chatFeature } from "../instance";

export async function ChatPage() {
  const currentUserId = "9e272678-02e9-445c-a77a-82122fada7da";

  const fetchedDate = await chatFeature.service.getFetchedDate(currentUserId);
  
  const messages = await getFetchedMessages(fetchedDate);

  return (
    <main className="container mx-auto p-2 rounded-md bg-base-200 mt-2 h-[85lvh] prose">
      <MessageBoard messages={messages} />
      <div className="flex items-center justify-end"></div>
      <Form />
    </main>
  );
}
