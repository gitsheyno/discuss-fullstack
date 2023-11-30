import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./db";

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

if (!GITHUB_CLIENT_ID || !GITHUB_CLIENT_SECRET) {
  throw new Error("Missing Git OAuth Credentials");
}

export const {
  handlers: { GET, POST }, //OAuth Setup
  auth, //check the user is signed in or not inside react component
  signOut,
  signIn,
} = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Github({
      clientId: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    // Ususally not needed
    async session({ session, user }: any) {
      console.log("session", session);
      if (session && user) {
        session.user.id = user.id;
      }
      return session;
    },
    // authorized({ auth, request: { nextUrl } }) {
    //   console.log(!!auth?.user, "auth");
    //   const isLoggedIn = !!auth?.user;
    //   console.log("log", isLoggedIn);
    //   const isOnTopic = nextUrl.pathname.startsWith("/topics");
    //   console.log(isOnTopic, "isOnDashboard");
    //   if (isOnTopic) {
    //     if (isLoggedIn) return true;
    //     // return false; // Redirect unauthenticated users to login page
    //     return Response.redirect(new URL("/api/auth/signin", nextUrl));
    //   } else if (isLoggedIn) {
    //     return Response.redirect(new URL("/topics", nextUrl));
    //   }
    //   return true;
    // },
  },
});
