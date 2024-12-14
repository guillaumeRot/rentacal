"use client";

import { registerUser } from "@/features/auth/auth.action";

export default function SignUp() {
  async function handleSubmit(formData: FormData) {
    try {
      await registerUser(formData);
      alert("Inscription réussie !");
    } catch (error: any) {
      alert(error.message);
    }
  }

  return (
    <form action={handleSubmit}>
      <input type="email" name="email" placeholder="Email" required />
      <input
        type="password"
        name="password"
        placeholder="Mot de passe"
        required
      />
      <button type="submit">S'inscrire</button>
    </form>
  );
}
