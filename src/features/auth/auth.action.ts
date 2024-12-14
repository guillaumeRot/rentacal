"use server";

import { signIn, signOut } from "@/auth/auth";
import { prisma } from "@/prisma";
import bcrypt from "bcrypt";
import { revalidatePath } from "next/cache";

export const singOutAction = async () => {
  await signOut();
};

export const signInAction = async () => {
  await signIn();
};

export async function registerUser(data: FormData) {
  const email = data.get("email") as string;
  const password = data.get("password") as string;

  if (!email || !password) {
    throw new Error("Email et mot de passe requis.");
  }

  // Vérifier si l'utilisateur existe déjà
  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    throw new Error("Cet email est déjà enregistré.");
  }

  // Hacher le mot de passe
  const hashedPassword = await bcrypt.hash(password, 10);

  // Créer un nouvel utilisateur
  await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
    },
  });

  // Optionnel : Révalider la page actuelle après inscription
  revalidatePath("/");
}

export async function findUserByEmail(email: string) {
  return await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
}

export async function passwordIsValid(
  plainPassword: string,
  hashedPassword: string
) {
  // Comparer le mot de passe en clair avec le mot de passe haché stocké dans la base de données
  const isValid = await bcrypt.compare(plainPassword, hashedPassword);
  return isValid;
}
