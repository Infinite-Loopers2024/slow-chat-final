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
  await chatFeature.service.updateFetchTime(currentUserId);

  const tokens = await chatFeature.service.getAllUserTokens(currentUserId);
  if (!tokens) {
    return;
  }
  await chatFeature.service.reduceUserToken(currentUserId);
  await getFetchedMessages(new Date().toISOString());
  revalidatePath("/chat");
}

export async function getFetchedMessages(fetchedDate: string) {
  const messages = await chatFeature.service.getAllMessages();

  const fetchedMessages = messages.filter(
    (message) => message.timeStamp < fetchedDate
  );

  return fetchedMessages;
}
