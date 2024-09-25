import NextAuth from "next-auth";
// import { MongoDBAdapter } from "@auth/mongodb-adapter";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { userModel } from "./models/user-model";
// import client from "./database/mongoClientPromise";
import bcrypt from 'bcryptjs';

export const { handlers, signIn, signOut, auth } = NextAuth({
  // adapter: MongoDBAdapter(client),
  session: {
    strategy: "jwt",
  },
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        if (credentials === null) return null;

        try {
          const user = await userModel.findOne({ email: credentials.email });
          // console.log({user});
          if (user) {
            console.log("I am here");
            const isMatch = await bcrypt.compare(
              credentials.password,
              user.password
            )
            console.log(isMatch);;
            if (isMatch) {
              return user;
            } else {
              throw new Error("Email or password mismatch");
            }
          } else {
            throw new Error("User not found");
          }
        } catch (error) {
          throw new Error(error);
        }
      },
    }),
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
});
