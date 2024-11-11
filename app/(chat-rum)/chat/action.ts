"use server";

export async function createMessage(formData: FormData) {
  const { message } = { message: formData.get("message") };
  console.log(message);
}
