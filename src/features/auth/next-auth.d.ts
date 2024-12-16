import "next-auth";

// Étendre les types de la session et du token
declare module "next-auth" {
  interface User {
    id: string; // Ajoutez ici les propriétés supplémentaires si nécessaire
  }
}
