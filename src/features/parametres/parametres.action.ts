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

export const updateParametres = action
  .schema(ParametresSchema)
  .action(async (parsedInput) => {
    try {
      const {
        id,
        userId,
        nbMoisLocParAn,
        dureePret,
        tauxPret,
        assurancePret,
        apport,
      } = parsedInput.parsedInput;

      // Mise à jour des paramètres dans la base de données
      await prisma.parametre.update({
        where: { id },
        data: {
          userId,
          nbMoisLocParAn,
          dureePret,
          tauxPret,
          assurancePret,
          apport,
        },
      });

      console.log(`Paramètres mis à jour pour id: ${id}`);
    } catch (error) {
      console.error("Erreur lors de la mise à jour des paramètres :", error);
      throw new Error("Impossible de mettre à jour les paramètres.");
    }
  });
