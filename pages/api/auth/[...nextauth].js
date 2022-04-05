import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { verifypassword } from "../../../lib/bcrypt";
import { connectToDatabase } from "../../../lib/dbconnection";

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const client = await connectToDatabase();
        const db = client.db();
        const usersCollection = db.collection("admin");
        const user = await usersCollection.findOne({
          email: credentials.email,
        });

        if (!user) {
          client.close();
          throw new Error("User not found");
        }

        const isValid = await verifypassword(
          credentials.password,
          user.password
        );
        if (!isValid) {
          client.close();
          throw new Error("Invalid password");
        }

        client.close();
        return user;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});
