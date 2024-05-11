import { PrismaAdapter } from "@auth/prisma-adapter";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import prisma from "./connect";
import { getServerSession } from "next-auth";


export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async session({ session, token, user,data }) {
      // Send properties to the client, like an access_token and user id from a provider.
      // session.accessToken = token.accessToken
      // session.user.id = token.id
      // session.user.isAdmin=false
      session.user=user;
      
      return session
    }
  }

};

export const getAuthSession = () => getServerSession(authOptions);
