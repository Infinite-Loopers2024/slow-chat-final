import Form from "./form";
import MessageBoard from "./message-board";
import { getFetchedMessages } from "../actions";
import { chatFeature } from "../instance";

export async function ChatPage() {
  const fetchedDate = await chatFeature.service.getFetchedDate(
    "7539a68c-9373-42c1-8ec1-5b6ea9e77016"
  );
  const messages = await getFetchedMessages(fetchedDate);
  return (
    <main className="container mx-auto p-2 rounded-md bg-base-200 mt-2 h-[85lvh] prose">
      <MessageBoard messages={messages} />
      <div className="flex items-center justify-end"></div>
      <Form />
    </main>
  );
}
