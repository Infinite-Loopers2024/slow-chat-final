import { MessageStats } from "./message-stats";

export async function MessageCount() {
  return (
    <section className="w-8/12 md:w-4/12 flex flex-col items-center justify-center">
      <h2 className="mt-8 md:mt-4 md:mb-4 text-xl font-bold">Message count</h2>
      <MessageStats />
    </section>
  );
}
