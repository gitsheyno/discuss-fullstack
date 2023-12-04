"use server";

import { redirect } from "next/navigation";

export async function search(formData: FormData) {
  const term = formData.get("term");
  console.log("recieved term", term);
  if (!term || typeof term !== "string") {
    redirect("/");
  }

  redirect(`/search?term=${term}`);
}
