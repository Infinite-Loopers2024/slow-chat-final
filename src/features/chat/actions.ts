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
  const tokens = await chatFeature.service.getTokens(currentUserId);
  if (!tokens) {
    return;
  }
  await chatFeature.service.setFetchedTime(currentUserId);
  revalidatePath("/chat");
}
