"use server";

import { action } from "@/lib/safe-actions";
import { prisma } from "@/prisma";
import { AccessSchema } from "../simulateur/simulateur.schema";

// export const insertMail = action(AccessSchema, async (input: AccessType) => {
//   const user = await prisma.utilisateur.create({
//     data: {
//       email: input.email,
//     },
//   });
//   return user;
// });

export const insertMail = action
  .schema(AccessSchema)
  .action(async ({ parsedInput: { email } }) => {
    if (email) {
      console.log("TEST GUI 3:", email);
      const user = await prisma.utilisateur.create({
        data: {
          email: email,
        },
      });
      return user;
    }
  });
