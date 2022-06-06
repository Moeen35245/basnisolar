import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { verifypassword } from "../../../lib/bcrypt";
import connectToDatabase from "../../../lib/dbconnection";
import Admin from "../../../models/Admin";

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        await connectToDatabase();

        const user = await Admin.findOne({
          email: credentials.email,
        });

        if (!user) {
          throw new Error("User not found");
        }

        const isValid = await verifypassword(
          credentials.password,
          user.password
        );
        if (!isValid) {
          throw new Error("Invalid password");
        }

        return user;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});
