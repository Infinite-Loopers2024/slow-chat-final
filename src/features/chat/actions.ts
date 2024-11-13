"use server";

import { revalidatePath } from "next/cache";
import { chatFeature } from "./instance";

export async function addMessage(formData: FormData) {
  const content = formData.get("content") as string;
 
    if (!content) {
      return
    }
    await chatFeature.service.sendMessage(content);
}

export async function revalidateMessages() {
  revalidatePath("/chat");
}
