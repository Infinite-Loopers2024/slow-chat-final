"use server"

export async function createMessage(formData: FormData){
 const rawMessage = {message: formData.get("message")}
 console.log(rawMessage.message);
}