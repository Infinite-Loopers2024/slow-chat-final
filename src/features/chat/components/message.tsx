import { onColdown } from "../actions";
import { MessageType } from "../type";

export default async function Message({
  message,
  isCurrentUser,
  time
}: {
  message: MessageType;
  isCurrentUser: boolean;
  time: string
}) {
  const { userName, content } = message;
  const coldown = await onColdown(message.timeStamp);
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
          <p className="">{coldown ? "" : content}</p>
        </div>
        <p className="">{coldown ? "" : time}</p>
      </div>
    </div>
  );
}
