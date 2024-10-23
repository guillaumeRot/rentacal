"use server";

import { action } from "@/lib/safe-actions";
import { AccessSchema, AccessType } from "../simulateur/simulateur.schema";

export const insertMail = action(AccessSchema, async (input: AccessType) => {
  const user = await prisma.utilisateur.create({
    data: {
      email: input.email,
    },
  });
  return user;
});
