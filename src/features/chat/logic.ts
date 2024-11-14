export async function onCooldown(timeStamp: string) {
  const date = new Date();
  date.setHours(date.getHours() - 1);
  date.toISOString();
  return timeStamp > date.toISOString();
}
