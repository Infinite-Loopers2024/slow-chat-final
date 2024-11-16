import { chatFeature } from "../instance";

export async function Stats() {
  const messages = await chatFeature.service.getAllUserMessageById();
  const test = await chatFeature.service.getAllMessagePerFetch();
  console.log(messages);
  return (
    <>
      <div className="stats stats-vertical shadow">
        <div className="stat">
          <div>
            {messages.map((message, index) => (
              <div key={index}>
                User nam: {message.userName}, Message Count: {message.count}
              </div>
            ))}
          </div>
        </div>

        <br />
        <div>
          {test.map((message, index) => (
            <div key={index}>
              <span>Fetch Date: {message.fetchDate.timestamp}</span>
              <br />
              <span>Fetch Count: {message.fetchCount}</span>
              <br /> <br />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
