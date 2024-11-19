import { FetchStats } from "./fetch-stats";
import { StatsCard } from "./stats-card";

export async function FetchCount() {
  return (
    <StatsCard title="Fetch Count">
      <FetchStats />
    </StatsCard>
  );
}
