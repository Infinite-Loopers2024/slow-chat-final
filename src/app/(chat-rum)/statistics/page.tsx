import { Stats } from "@/src/features/chat/components/stats";

export default function StatisticsPage() {
  return (
    <>
      <div className="">
        total messages <Stats />
      </div>

      <div>Number of new messages/fetch + coldwon</div>
      <div>Number of new messages/fetch</div>
    </>
  );
}
