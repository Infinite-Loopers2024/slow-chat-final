import type { Message } from "../type";

type Props = {
  message: Message;
  isCurrentUser: boolean;
};

export async function Message({ message, isCurrentUser }: Props) {
  const { userName, content } = message;
  return (
    <article className={isCurrentUser ? "chat chat-start" : "chat chat-end"}>
      <div className="chat-header">
        {userName}
        <div
          className={
            isCurrentUser
              ? "chat-bubble chat-bubble-primary"
              : "chat-bubble chat-bubble-secondary"
          }
        >
          <p>{content}</p>
        </div>
        <p>{message.timestamp.slice(11, 16)}</p>
      </div>
    </article>
  );
}
