import { prisma } from "@/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
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
  ],
  adapter: PrismaAdapter(prisma),
});

// export const {
//   handlers,
//   auth: baseAuth,
//   signIn,
//   signOut,
// } = NextAuth({
//   adapter: PrismaAdapter(prisma),
//   // theme: {
//   //   logo: "/icon-title.png",
//   // },
//   providers: [
//     Google({
//       clientId: env.GOOGLE_CLIENT_ID,
//       clientSecret: env.GOOGLE_CLIENT_SECRET,
//     }),
//   ],
//   // events: {
//   //   createUser: async (message) => {
//   //     const userId = message.user.id;
//   //     const userEmail = message.user.email;

//   //     if (!userEmail || !userId) {
//   //       return;
//   //     }

//   //     const stripeCustomer = await stripe.customers.create({
//   //       name: message.user.name ?? "",
//   //       email: userEmail,
//   //     });

//   //     await prisma.user.update({
//   //       where: {
//   //         id: userId,
//   //       },
//   //       data: {
//   //         stripeCustomerId: stripeCustomer.id,
//   //       },
//   //     });
//   //   },
//   // },
// });
