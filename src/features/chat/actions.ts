"use server";

import { revalidatePath } from "next/cache";
import { chatFeature } from "./instance";

export async function addMessage(formData: FormData) {
  const content = formData.get("content") as string;

  if (!content) {
    return;
  }
  await chatFeature.service.sendMessage(content);
}

export async function revalidateMessages() {
  const currentUserId = "9e272678-02e9-445c-a77a-82122fada7da";
  const tokens = await chatFeature.service.getAllUserTokens(currentUserId);
  if (!tokens) {
    return;
  }
  await chatFeature.service.reduceUserToken(currentUserId);
  calculateTimeDifference(new Date());
  revalidatePath("/chat");
}

export async function calculateTimeDifference(date: Date) {
  const messages = await chatFeature.service.getAllMessages();
  const dates = messages.map((message) => {
    return message.timeStamp;
  });
  const messageDate = dates.map((test) => {
    return test.slice(0, 10);
  });
  console.log(messageDate);
}
