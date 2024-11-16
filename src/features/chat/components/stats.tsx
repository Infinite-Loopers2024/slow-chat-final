import { chatFeature } from "../instance";

export async function Stats() {
  const messages = await chatFeature.service.getAllUserMessageById();
  const test = await chatFeature.service.getAllMessagePerFetch();
  console.log(messages);
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-6">
        <div className="stats shadow">
          <div>
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

        <div className="flex flex-col  justify-center items-center mt-6">
          <div className="stats flex flex-col md:flex-row shadow">
            {test.map((message, index) => (
              <div key={index}>
                <div className="stat shadow place-items-center" key={index}>
                  <div className="stat-title">Fetch date</div>{" "}
                  <div className="stat-value text-sm">
                    {message.fetchDate.timestamp}
                  </div>
                  <div className="stat-title">Fetch count</div>{" "}
                  <div className="stat-value text-sm">{message.fetchCount}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
