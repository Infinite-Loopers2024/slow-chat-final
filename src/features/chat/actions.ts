"use server";

//import { revalidatePath } from "next/cache";
import { chatFeature } from "./instance";
const currentUserId = "9e272678-02e9-445c-a77a-82122fada7da";

export async function addMessage(formData: FormData) {
  const content = formData.get("content") as string;

  if (!content) {
    return;
  }
  await chatFeature.service.sendMessage(content);
}

// export async function revalidateMessages() {
//   await chatFeature.service.setFetchedTime(currentUserId);

//   const tokens = await chatFeature.service.getAllUserTokens(currentUserId);
//   if (!tokens) {
//     return;
//   }
//   //await chatFeature.service.reduceUserToken(currentUserId);
//   await getFetchedMessages();
//   revalidatePath("/chat");
// }

export async function getFetchedMessages() {
  const messages = await chatFeature.service.getAllMessages();
  const fetchedDate = await chatFeature.service.getFetchedDate(currentUserId);

  const fetchedMessages = messages.filter(
    (message) => message.timeStamp < fetchedDate[0]
  );

  return fetchedMessages;
}

// export async function handleTokens() {
//   const date = new Date("2024-11-16T00:00:01").getDay();
//   if (date === 0) {
//     await chatFeature.service.refillWeeklyToken(currentUserId);
//   }
//   await chatFeature.service.refillDailyToken(currentUserId);
//   const totalTokens = await chatFeature.service.getAllUserTokens(currentUserId);
//   return totalTokens;
// }
