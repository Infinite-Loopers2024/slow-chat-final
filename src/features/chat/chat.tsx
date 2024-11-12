import Form from "./form";
import MessageBoard from "./message-board";
import { getAllMessages } from "@/src/feature/chat/action";

export type MessageType = {
  id: string;
  content: string;
  userName: string;
  timeStamp: string;
};

export default async function ChatPage() {
  const messages = await getAllMessages();

  return (
    <main className="container mx-auto pb-6 p-2 rounded-md bg-base-200 mt-2 h-[85lvh]">
      <MessageBoard messages={messages} />
      <div className="flex items-center justify-end"></div>
      <Form />
    </main>
  );
}
