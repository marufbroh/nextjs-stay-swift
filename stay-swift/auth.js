import NextAuth from "next-auth";
// import { MongoDBAdapter } from "@auth/mongodb-adapter";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials"
// import client from "./database/mongoClientPromise";


export const { handlers, signIn, signOut, auth } = NextAuth({
  // adapter: MongoDBAdapter(client),
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {}
      }
    }),
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    
  ],
});
