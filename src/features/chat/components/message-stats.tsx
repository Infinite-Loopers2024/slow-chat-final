import { chatService } from "../instance";

export async function MessageStats() {
  const messages = await chatService.getAllUserMessages();
  return (
    <article className="stats stats-vertical shadow mb-14 mt-4 w-60 border-2 border-accent md:mt-0">
      {messages.map((message, index) => (
        <div className="stat shadow place-items-center" key={index}>
          <p className="stat-value text-sm">{message.userName}</p>
          <p className="stat-title">Message count</p>{" "}
          <p className="stat-value text-sm">{message.count}</p>
        </div>
      ))}
    </article>
  );
}
