import { onCooldown } from "../logic";
import { MessageType } from "../type";

export default async function Message({
  message,
  isCurrentUser,
  time,
}: {
  message: MessageType;
  isCurrentUser: boolean;
  time: string;
}) {
  const { userName, content } = message;
  const cooldown = await onCooldown(message.timeStamp);
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
