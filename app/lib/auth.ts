import axios from "axios";
import CredentialsProviders from "next-auth/providers/credentials";

export const NEXT_AUTH = {
  providers: [
    CredentialsProviders({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials: any) {
        try {
          // Call your existing signin API using axios
          const res = await axios.post(
            `${process.env.NEXTAUTH_URL}/api/auth/user/signin`,
            {
              email: credentials?.email,
              password: credentials?.password,
            }
          );
          const user = res.data;
          //console.log(user);
          // If user data is returned, authorize the user
          if (res.status === 200 && user) {
            return user;
          } else {
            return null;
          }
        } catch (error) {
          console.error("Error during signin:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }: any) {
      session.user.id = token.id;
      session.user.name = token.name;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/signin",
    newUser: "/",
  },
};
