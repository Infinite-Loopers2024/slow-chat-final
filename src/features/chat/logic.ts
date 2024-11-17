import { FetchTimestamp, Message } from "./type";

export function onCooldown(timeStamp: string, date: Date) {
  date.setHours(date.getHours() - 1);
  return timeStamp > date.toISOString().replace("T", " ").replace("Z", "");
}

export function calculateDailyTokens(
  rawLatestFetchedDate: string,
  rawCurrentDate: Date
) {
  if (!rawLatestFetchedDate) {
    return 1;
  }
  const latestFetchedDate = rawLatestFetchedDate.split(" ");
  const currentDate = rawCurrentDate.toISOString().split("T");

  if (latestFetchedDate[0] === currentDate[0]) {
    return 0;
  }
  return 1;
}

export function calculateWeeklyTokens(fetchDates: string[]) {
  if (fetchDates.length < 2) {
    return 2;
  }
  const dates = fetchDates.map((date) => date.split(" ")[0]);

  let daysWithMultipleFetches = 0;
  for (let i = 0; i < dates.length; i++) {
    if (i !== 0) {
      if (dates[i] === dates[i - 1]) {
        daysWithMultipleFetches = daysWithMultipleFetches + 1;
      }
    }
  }
  const weekly = 2 - daysWithMultipleFetches;
  return weekly < 0 ? 0 : weekly;
}

export function calculateTotalTokens(
  fetchDates: string[],
  rawCurrentDate: Date
) {
  const weeklyTokens = calculateWeeklyTokens(fetchDates);

  const dailyTokens = calculateDailyTokens(
    fetchDates[fetchDates.length - 1],
    rawCurrentDate
  );

  return weeklyTokens + dailyTokens;
}

export function getDateOfLatestSunday(currentDate: Date) {
  const date = currentDate.getDate();
  const day = currentDate.getDay();
  const currentHour = currentDate.getHours();
  currentDate.setHours(currentHour + 1);

  const dateOfLatestSunday = currentDate.setDate(date - day);
  return new Date(dateOfLatestSunday).toISOString();
}


export function calculateFetchedMessages(allMessages: Message[], allFetches: FetchTimestamp[]){
  const messagesPerFetch = [];
  let onCooldownMessages = 0;
  let messageCount = 0;

  for (let i = 0; i < allFetches.length; i++) {
    messageCount = 0;
    onCooldownMessages = 0;
    for (let n = 0; n < allMessages.length; n++) {
      if (i === 0) {
        if (allMessages[n].timestamp < allFetches[i].timestamp) {
          messageCount++;
        }
      } else {
        if (
          allMessages[n].timestamp < allFetches[i].timestamp &&
          allMessages[n].timestamp > allFetches[i - 1].timestamp
        ) {
          if (
            onCooldown(
              allMessages[n].timestamp,
              new Date(allFetches[i].timestamp)
            )
          ) {
            onCooldownMessages++;
          }
          messageCount++;
        }
      }
    }
    messagesPerFetch.push({
      fetchDate: allFetches[i],
      fetchCount: messageCount - onCooldownMessages,
      messagesOnCooldown: onCooldownMessages,
    });
  }
  return messagesPerFetch
}
