"use server";

import { revalidatePath } from "next/cache";
import { chatFeature } from "./instance";
const currentUserId = "9e272678-02e9-445c-a77a-82122fada7da";

export async function addMessage(formData: FormData) {
  const content = formData.get("content") as string;

  if (!content) {
    return;
  }
  await chatFeature.service.sendMessage(content);
}

export async function revalidateMessages() {
  await chatFeature.service.updateFetchTime(currentUserId);

  const tokens = await chatFeature.service.getAllUserTokens(currentUserId);
  if (!tokens) {
    return;
  }
  await chatFeature.service.reduceUserToken(currentUserId);
  await getFetchedMessages();
  revalidatePath("/chat");
}

export async function getFetchedMessages() {
  console.log(new Date().toISOString());
  const messages = await chatFeature.service.getAllMessages();
  const fetchedDate = await chatFeature.service.getFetchedDate(currentUserId);

  const fetchedMessages = messages.filter(
    (message) => message.timeStamp < fetchedDate
  );

  return fetchedMessages;
}
export async function onColdown(timeStamp: string) {
  const date = new Date().toISOString();
  const currentDate = new Date(date);
  currentDate.setHours(currentDate.getHours() - 1);
  currentDate.toISOString();
  return timeStamp > currentDate.toString();
}
