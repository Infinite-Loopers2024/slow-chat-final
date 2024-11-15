import { onCooldown } from "../logic";
import type { Message } from "../type";

export async function Message({
  message,
  isCurrentUser,
  time,
}: {
  message: Message;
  isCurrentUser: boolean;
  time: string;
}) {
  const { userName, content } = message;
  const cooldown = await onCooldown(message.timestamp);
  return (
    <section className={isCurrentUser ? "chat chat-start" : "chat chat-end"}>
      <div className="chat-header">
        {userName}
        <div
          className={
            isCurrentUser
              ? "chat-bubble chat-bubble-primary"
              : "chat-bubble chat-bubble-secondary"
          }
        >
          <p>{cooldown ? "" : content}</p>
        </div>
        <p>{cooldown ? "" : time}</p>
      </div>
    </section>
  );
}
