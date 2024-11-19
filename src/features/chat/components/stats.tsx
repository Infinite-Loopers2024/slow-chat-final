import { FetchCount } from "./fetch-count";
import { MessageCount } from "./message-count";

export async function Stats() {
  

  return (
    <div className="flex flex-col items-center justify-center md:flex-row md:items-start">
      <MessageCount/>
      <FetchCount />
    </div>
  );
}
