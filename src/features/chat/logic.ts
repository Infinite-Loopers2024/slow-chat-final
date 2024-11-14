export async function onCooldown(timeStamp: string) {
  const date = new Date();
  date.setHours(date.getHours() - 1);
  date.toISOString();
  return timeStamp > date.toISOString();
}

export function calculateDailyTokens(
  rawLatestFetchedDate: string,
  rawCurrentDate: Date
) {
  if (!rawLatestFetchedDate) {
    return 1;
  }
  const latestFetchedDate = rawLatestFetchedDate.split("T");
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
  const dates = fetchDates.map((date) => date.split("T")[0]);

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

  const dateOfLatestSunday = currentDate.setDate(date - day);
  return new Date(dateOfLatestSunday).toISOString();
}
