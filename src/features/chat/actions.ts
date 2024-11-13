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
  const fetchedMessages =  await getFetchedMessages(new Date().toISOString())
  console.log(fetchedMessages)
  revalidatePath("/chat");
}

export async function calculateTimeDifference(currentDate: Date) {
  const approvedDates = [];
  const cooldownDates = [];

  const messages = await chatFeature.service.getAllMessages();
  const currentDateString = currentDate.toISOString();
  const dates = messages.map((message) => {
    return message.timeStamp;
  });

  const datesToCheck = [];

  for (let i = 0; i < dates.length; i++) {
    const date = new Date(dates[i]);
    date.setHours(date.getHours() + 1);
    const updatedDate = date.toISOString();
    datesToCheck.push(updatedDate);
  }

  for (let j = 0; j < datesToCheck.length; j++) {
    if (datesToCheck[j] < currentDateString) {
      approvedDates.push(datesToCheck[j]);
    } else {
      cooldownDates.push(datesToCheck[j]);
    }
  }

  console.log(approvedDates);
  console.log(cooldownDates);
}

export async function getFetchedMessages(fetchedDate: string) {
  const messages = await chatFeature.service.getAllMessages();

  const fetchedMessages = messages.filter(
    (message) => message.timeStamp < fetchedDate
  );

  return fetchedMessages;
}
