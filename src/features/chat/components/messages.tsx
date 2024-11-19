import {chatService } from "../instance";
import { Message as MessageComponent } from "./message";


export async function Messages(){
  const currentUserName = "Peter";
  const messages = await chatService.getFetchedMessages();

 return (
   <div
     id="message-placeholder"
     className="h-4/6 bg-base-100 rounded-md m-2 overflow-auto flex flex-col"
   >
     {messages.map((message, index) => (
       <MessageComponent
         key={index}
         message={message}
         isCurrentUser={message.userName === currentUserName}
         time={message.timestamp.slice(11, 16)}
       />
     ))}
   </div>
 );
}