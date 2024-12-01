"use server";

import { action } from "@/lib/safe-actions";
import { prisma } from "@/prisma";
import { z } from "zod";
import { ParametresSchema, ParametresType } from "./parametres.schema";

export const getParametresByUser = action
  .schema(
    z.object({
      userId: z.string(),
    })
  )
  .outputSchema(ParametresSchema)
  .action(async (parsedInput) => {
    try {
      const userId = parsedInput.parsedInput.userId;

      let parametre = await prisma.parametre.findUnique({
        where: { userId },
      });

      if (!parametre) {
        parametre = await prisma.parametre.create({
          data: {
            userId,
            nbMoisLocParAn: 12,
            dureePret: 15,
            tauxPret: 1,
            assurancePret: 0,
            apport: 0,
          },
        });
      }

      return parametre as ParametresType;
    } catch (error) {
      console.error("Erreur côté serveur :", error);
      throw new Error("Erreur lors de la récupération des paramètres.");
    }
  });
