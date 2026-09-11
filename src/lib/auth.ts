import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { prisma } from './prisma';

// Google OAuth login. The site owner must create a Google OAuth 2.0 client
// (in Google Cloud Console) and set GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET.
// End users then sign in with their own Google accounts; their identity is
// upserted into the User table and decks are scoped by that user id.
export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
  ],
  session: { strategy: 'jwt' },
  pages: { signIn: '/login' },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    // First sign-in: upsert the Google user into the DB and attach its id to the JWT.
    async jwt({ token, account, user }) {
      if (account && user) {
        const dbUser = await prisma.user.upsert({
          where: { googleId: account.providerAccountId },
          create: {
            googleId: account.providerAccountId,
            email: user.email as string,
            name: user.name ?? null,
            image: user.image ?? null,
          },
          update: {
            name: user.name ?? null,
            image: user.image ?? null,
          },
        });
        token.userId = dbUser.id;
      }
      return token;
    },
    // Expose the DB user id on the session for server-side ownership checks.
    async session({ session, token }) {
      if (session.user) {
        (session.user as { id?: string }).id = token.userId as string;
      }
      return session;
    },
  },
};
