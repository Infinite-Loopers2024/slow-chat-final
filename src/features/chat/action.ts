"use server";
import { v4 } from "uuid";
import { MessageType } from "../../ui/chat/chat";
import { revalidatePath } from "next/cache";
import db from "../../fixtures/messages.json";

export async function addMessage(formData: FormData) {
  const content = formData.get("messages") as string;
  const id: string = v4();
  const userName = "Peter";
  const timeStamp = new Date().toISOString();

  if (content) {
    return await createMessage({ id, content, userName, timeStamp });
  }
}
export async function createMessage(message: MessageType) {
  const { id, content, userName, timeStamp } = message;
  const newMessage: MessageType = {
    id: id,
    content: content as string,
    userName: userName,
    timeStamp: timeStamp,
  };
  db.push(newMessage);
  console.log("db pushed");
}

export function getAllMessages() {
  const data = db;
  revalidatePath("/chat");
  return data;
}
