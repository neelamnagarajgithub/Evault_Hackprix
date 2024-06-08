"use server";
import { auth, signIn, signOut } from "./auth";

export async function submitLogin() {
  await signIn("google", { redirectTo: "/account" });
}

export async function submitLogout() {
  await signOut({ redirectTo: "/" });
}

export async function submitSigninEmailandPassword(formdata: FormData) {
  // console.log(formdata);
}

export async function getUser() {
  const session = await auth();
  return {
    name: session?.user?.name,
    email: session?.user?.email,
    image: session?.user?.image,
  };
}

export async function sendUserDetails() {
  const session = await auth();
  const response = await fetch("http://localhost:7500/api/v1/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: session?.user?.name,
      email: session?.user?.email,
      image: session?.user?.image,
    }),
  }).catch((err) => console.log(err));
}
