import { chatFeature } from "../instance";
import Form from "./form";
import { Messages } from "./messages";
import TokenCount from "./token-count";

export default async function MessageBoard() {
  const userId = "550e8400-e29b-41d4-a716-446655440000";
  const messages = await chatFeature.service.getFetchedMessages();
  const totalTokens = await chatFeature.service.getTokens(userId);
  return (
    <>
      <Messages messages={messages} />
      <TokenCount totalTokens={totalTokens} />
      <Form />
    </>
  );
}
