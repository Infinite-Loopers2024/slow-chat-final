"use server";

import { v4 } from "uuid";
import { MessageType } from "./type";
import { revalidatePath } from "next/cache";
import { chatFeature } from "./instance";

export async function addMessage(formData: FormData) {
  const content = formData.get("messages") as string;
  // servicelagret -->
  const id: string = v4();
  const userName = "Peter";
  const timeStamp = new Date().toISOString();
  // end

  // !check and early return
  if (content) {
    const newMessage: MessageType = {
      id: id,
      content: content,
      userName: userName,
      timeStamp: timeStamp,
    };
    await chatFeature.service.sendMessage(newMessage);
  }
}

export async function revalidateMessages() {
  revalidatePath("/chat");
}
