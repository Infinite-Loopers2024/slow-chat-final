"use server";

import { redirect } from "next/navigation";

export async function signIn(formData: FormData) {
  const password = formData.get("password");

  if(password === "secret"){
   redirect("/chat")
  }
}
