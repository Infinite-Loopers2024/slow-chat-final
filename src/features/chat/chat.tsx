import Form from "./form";
import { chatFeature } from "./instance";
import MessageBoard from "./message-board";

export type MessageType = {
  id: string;
  content: string;
  userName: string;
  timeStamp: string;
};

export async function ChatPage() {
  const messages = await chatFeature.service.getAllMessages()

  return (
    <main className="container mx-auto pb-6 p-2 rounded-md bg-base-200 mt-2 h-[85lvh]">
      <MessageBoard messages={messages} />
      <div className="flex items-center justify-end"></div>
      <Form />
    </main>
  );
}
