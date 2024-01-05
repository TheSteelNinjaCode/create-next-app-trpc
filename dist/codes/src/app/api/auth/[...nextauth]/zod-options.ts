import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email:",
          type: "email",
          placeholder: "Email",
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials) {
        const user = {
          id: "42",
          name: "Jeff",
          email: "j@gmail.com",
          password: "123",
          role: { id: 1, name: "Admin" },
        };

        if (
          credentials?.email === user.email &&
          credentials?.password === user.password
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
    async session({ session, token }) {
      if (session?.user) session.user.role = token.role;
      return session;
    },
  },
};
