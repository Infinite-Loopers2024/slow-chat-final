import { chatFeature } from "../instance";

export async function Stats() {
  const messages = await chatFeature.service.getAllUserMessageById();
  const messageCount = await chatFeature.service.getAllMessagePerFetch();
  console.log(messages);
  return (
    <>
      <div className="flex flex-col items-center justify-center md:flex-row md:items-start">
        <div className="w-8/12 md:w-4/12 flex flex-col items-center justify-center">
          <h1 className="mt-8 text-center">Message count</h1>
          <div className="stats stats-vertical shadow  mb-14 mt-4">
            {messages.map((message, index) => (
              <div className="stat shadow place-items-center" key={index}>
                <div className="stat-title">User name</div>{" "}
                <div className="stat-value text-sm">{message.userName}</div>
                <div className="stat-title">Message count</div>{" "}
                <div className="stat-value text-sm">{message.count}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-8/12 md:w-4/12 flex flex-col items-center justify-center">
          <h1 className="mb-4 text-center">Fetch count</h1>

          <div className="stats stats-vertical shadow ">
            {messageCount.map((message, index) => (
              <div key={index}>
                <div className="stat shadow place-items-center" key={index}>
                  <div className="stat-title">Fetch date</div>{" "}
                  <div className="stat-value text-sm">
                    {message.fetchDate.timestamp}
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
        </div>
      </div>
    </>
  );
}
