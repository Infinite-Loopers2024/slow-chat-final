"use server";
import { MessageType } from "@/src/ui/chat/chat";
import db from "../../fixtures/messages.json";
import { revalidatePath } from "next/cache";



export async function addMessage(message: MessageType) {
  const { id, content, userName, timeStamp } = message;
  const newMessage: MessageType = {
    id: id,
    content: content as string,
    userName: userName,
    timeStamp: timeStamp,
  };
  db.push(newMessage);
  revalidatePath("/chat")
}
