export async function onCooldown(timeStamp: string) {
  const date = new Date();
  date.setHours(date.getHours() - 1);
  date.toISOString();
  return timeStamp > date.toISOString();
}

export function calculateDailyTokens(
  rawLatestFetchedDate: string,
  rawCurrentDate: string
) {
  const latestFetchedDate = rawLatestFetchedDate.split("T");
  const currentDate = rawCurrentDate.split("T");
  if (latestFetchedDate[0] === currentDate[0]) {
    return 0;
  }
  return 1;
}
