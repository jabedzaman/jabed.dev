import NextAuth, { NextAuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/google";

const authOptions:NextAuthOptions = {
  providers: [
    DiscordProvider({
      clientId: process.env.OAUTH_GOOGLE_CLIENT_ID!,
      clientSecret: process.env.OAUTH_GOOGLE_CLIENT_SECRET!,
    })
  ]
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };