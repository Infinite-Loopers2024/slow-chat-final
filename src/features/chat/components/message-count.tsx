import { MessageStats } from "./message-stats";
import { StatsCard } from "./stats-card";

export async function MessageCount() {
  return (
    <StatsCard title="Message Count">
      <MessageStats />
    </StatsCard>
  );
}
