"use server";

import { revalidatePath } from "next/cache";
import { chatService } from "./instance";

const currentUserId = "550e8400-e29b-41d4-a716-446655440000";

export async function addMessage(formData: FormData) {
  const content = formData.get("content") as string;
  if (!content) {
    return;
  }
  await chatService.sendMessage(content);
}

export async function revalidateMessages() {
  const tokens = await chatService.getTokens(currentUserId);
  if (!tokens) {
    return;
  }

  await chatService.setFetchTime(currentUserId);
  revalidatePath("/chat");
}
