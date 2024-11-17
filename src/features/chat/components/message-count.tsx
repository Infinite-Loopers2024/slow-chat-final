import { UserMessage } from "../type";

export function MessageCount({ messages }: { messages: UserMessage[] }) {
  return (
    <section className="w-8/12 md:w-4/12 flex flex-col items-center justify-center">
      <h2 className="mt-8 md:mt-4 md:mb-4 text-xl font-bold">Message count</h2>
      <div className="stats stats-vertical shadow mb-14 mt-4 w-60 border-2 border-accent md:mt-0">
        {messages.map((message, index) => (
          <div className="stat shadow place-items-center" key={index}>
            <p className="stat-value text-sm">{message.userName}</p>
            <p className="stat-title">Message count</p>{" "}
            <p className="stat-value text-sm">{message.count}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
