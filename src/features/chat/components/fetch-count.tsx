import { FetchStats } from "./fetch-stats";

export async function FetchCount() {
  return (
    <section className="w-8/12 md:w-4/12 flex flex-col items-center justify-center">
      <h2 className="mb-4 md:mt-4 md:mb-4 text-center text-xl font-bold">
        Fetch count
      </h2>
      <FetchStats />
    </section>
  );
}
