import { MessageCount } from "../type";

type Props = {
  messageCount: MessageCount[];
};

export function FetchCount({ messageCount }: Props) {
  return (
    <section className="w-8/12 md:w-4/12 flex flex-col items-center justify-center">
      <h2 className="mb-4 md:mt-4 md:mb-4 text-center text-xl font-bold">
        Fetch count
      </h2>
      <article className="stats stats-vertical shadow w-60 border-2 border-accent">
        {messageCount.map((message, index) => (
          <div key={index}>
            <div className="stat shadow place-items-center" key={index}>
              <div className="stat-title">Fetch date</div>{" "}
              <div className="stat-value text-sm">
                {message.fetchDate.timestamp.slice(0, 11)}
              </div>
              <h3 className="stat-title">Fetch count</h3>{" "}
              <p className="stat-value text-sm">{message.fetchCount}</p>
              <h3 className="stat-title">Messages on cooldown</h3>{" "}
              <p className="stat-value text-sm">{message.messagesOnCooldown}</p>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
}
