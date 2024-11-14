"use server";

import { revalidatePath } from "next/cache";
import { chatFeature } from "./instance";
const currentUserId = "550e8400-e29b-41d4-a716-446655440000";

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
