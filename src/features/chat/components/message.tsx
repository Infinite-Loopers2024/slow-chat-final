import type { Message } from "../type";
import {chatService } from "../instance";

type Props = {
  message: Message;
  isCurrentUser: boolean;
  time: string;
};

export async function Message({ message, isCurrentUser, time }: Props) {
  const { userName, content } = message;
  const cooldown = chatService.checkIfOnCooldown(message.timestamp);
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
