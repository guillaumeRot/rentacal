"use server";

import { signIn, signOut } from "@/auth/auth";
import { prisma } from "@/prisma";
import bcrypt from "bcrypt";
import { SignupType } from "./auth.schema";

export const signOutAction = async () => {
  await signOut({
    redirectTo: "/", // Page vers laquelle rediriger l'utilisateur après déconnexion
  });
};

export const signInAction = async () => {
  await signIn();
};

export async function registerUser(data: SignupType) {
  if (!data.email || !data.password) {
    throw new Error("Email et mot de passe requis.");
  }

  // Vérifier si l'utilisateur existe déjà
  const existingUser = await prisma.user.findUnique({
    where: { email: data.email },
  });
  if (existingUser) {
    throw new Error("Cet email est déjà enregistré.");
  }

  // Hacher le mot de passe
  const hashedPassword = await bcrypt.hash(data.password, 10);

  // Créer un nouvel utilisateur
  const user = await prisma.user.create({
    data: {
      email: data.email,
      name: data.name,
      password: hashedPassword,
    },
  });
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
