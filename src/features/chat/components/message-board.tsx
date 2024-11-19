import { chatService } from "../instance";
import Form from "./form";
import { Messages } from "./messages";
import TokenCount from "./token-count";

export default async function MessageBoard() {
  const userId = "550e8400-e29b-41d4-a716-446655440000";

  const totalTokens = await chatService.getTokens(userId);
  return (
    <div className="container mx-auto p-2 rounded-md bg-base-200 mt-2 h-[85lvh] prose">
      <Messages />
      <TokenCount totalTokens={totalTokens} />
      <Form />
    </div>
  );
}
