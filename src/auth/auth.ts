import { findUserByEmail } from "@/features/auth/auth.action";
import { prisma } from "@/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import LinkedIn from "next-auth/providers/linkedin";

export const {
  handlers,
  auth: baseAuth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    LinkedIn({
      clientId: process.env.AUTH_LINKEDIN_ID,
      clientSecret: process.env.AUTH_LINKEDIN_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        console.log("Dans authorize:", credentials);
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        // Vérifier l'utilisateur dans la base de données
        const user = await findUserByEmail(credentials.email as string);
        if (!user) {
          console.log("Utilisateur non trouvé");
          return null; // L'utilisateur n'a pas été trouvé
        }

        // Vérifier le mot de passe
        const passwordIsValid = await bcrypt.compare(
          credentials.password as string,
          user.password as string
        );
        if (!passwordIsValid) {
          console.log("Mot de passe invalide");
          return null; // Le mot de passe est invalide
        }

        // Créez un token JWT pour l'utilisateur
        const token = jwt.sign(
          { id: user.id, email: user.email },
          process.env.JWT_SECRET!,
          { expiresIn: "1h" }
        );

        console.log("Utilisateur authentifié", user);

        return user;
      },
    }),
  ],
  adapter: PrismaAdapter(prisma),
  callbacks: {
    jwt({ token, user }) {
      console.log("Dans JWT:", token);
      return token;
    },
    session({ session, token }) {
      console.log("Dans Session:", session);
      return session;
    },
    async redirect({ url, baseUrl }) {
      return `${baseUrl}/simulateur`;
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
});
