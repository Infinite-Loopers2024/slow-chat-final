"use server";

import { redirect } from "next/navigation";

export async function signIn(formData: FormData) {
  const name = formData.get("name")
  const password = formData.get("password");

  console.log(name)

  if(password === "secret"){
   redirect("/chat")
  }
}
