import { chatFeature } from "../instance";

export async function Stats() {
  const messages = await chatFeature.service.getAllUserMessages();
  const messageCount = await chatFeature.service.getAllMessagesPerFetch();
  return (
    <div className="flex flex-col items-center justify-center md:flex-row md:items-start">
      <section className="w-8/12 md:w-4/12 flex flex-col items-center justify-center">
        <h2 className="mt-8 md:mt-4 md:mb-4 text-xl font-bold">
          Message count
        </h2>
        <div className="stats stats-vertical shadow mb-14 mt-4 w-60 border-2 border-accent md:mt-0">
          {messages.map((message, index) => (
            <div className="stat shadow place-items-center" key={index}>
              <div className="stat-value text-sm">{message.userName}</div>
              <div className="stat-title">Message count</div>{" "}
              <div className="stat-value text-sm">{message.count}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-8/12 md:w-4/12 flex flex-col items-center justify-center">
        <h2 className="mb-4 md:mt-4 md:mb-4 text-center text-xl font-bold">
          Fetch count
        </h2>
        <div className="stats stats-vertical shadow w-60 border-2 border-accent">
          {messageCount.map((message, index) => (
            <div key={index}>
              <div className="stat shadow place-items-center" key={index}>
                <div className="stat-title">Fetch date</div>{" "}
                <div className="stat-value text-sm">
                  {message.fetchDate.timestamp.slice(0, 11)}
                </div>
                <div className="stat-title">Fetch count</div>{" "}
                <div className="stat-value text-sm">{message.fetchCount}</div>
                <div className="stat-title">Messages on cooldown</div>{" "}
                <div className="stat-value text-sm">
                  {message.messagesOnCooldown}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
