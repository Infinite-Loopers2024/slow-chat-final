import { chatFeature } from "../instance";
// const user_id = "550e8400-e29b-41d4-a716-446655440000";

export async function Stats() {
  const messages = await chatFeature.service.getAllUserMessageById();
  console.log(messages);
  return (
    <div>
      {messages.map((message, index) => (
        <div key={index}>
          User name: {message.userName}, Message Count: {message.count}
        </div>
      ))}
    </div>
  );
}
