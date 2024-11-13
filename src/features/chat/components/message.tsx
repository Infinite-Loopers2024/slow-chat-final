import { MessageType } from "../type";

export default function Message({
  message,
  isCurrentUser,
}: {
  message: MessageType;
  isCurrentUser: boolean;
}) {
  const { userName, content } = message;

  return (
    <div className={isCurrentUser ? "chat chat-start" : "chat chat-end"}>
      <div className="chat-header">
        {userName}
        <div
          className={
            isCurrentUser
              ? "chat-bubble chat-bubble-primary"
              : "chat-bubble chat-bubble-secondary"
          }
        >
          <p className="">{content}</p>
        </div>
      </div>
    </div>
  );
}
