"use client";

import { signIn } from "next-auth/react";
import { FaLinkedin } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

export default function SignIn() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Bienvenue !</h1>
      <p className="mb-4">Connectez-vous pour continuer :</p>
      <div className="flex flex-col gap-4">
        <button
          key="Google"
          onClick={() => signIn("google")}
          className="px-4 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all bg-white text-black border border-gray-300 hover:bg-gray-100"
        >
          <span className="flex items-center gap-2">
            <FcGoogle className="text-2xl" />
            Continuer avec Google
          </span>
        </button>

        <button
          key="LinkedIn"
          onClick={() => signIn("linkedin")}
          className="px-4 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all bg-blue-600 text-white hover:bg-blue-700"
        >
          <span className="flex items-center gap-2">
            <FaLinkedin className="text-2xl" />
            Continuer avec LinkedIn
          </span>
        </button>
      </div>
    </div>
  );
}

// // src/components/AuthForm.tsx

// "use client";

// import { Session } from "next-auth";
// import { signIn } from "next-auth/react";

// interface Props {
//   session: Session | null;
// }

// export default function AuthForm({ session }: Props) {
//   const handleGoogleSignIn = async () => {
//     await signIn("google", { callbackUrl: "/simulateur" });
//   };

//   return (
//     <div>
//       {!session && (
//         <>
//           <button onClick={handleGoogleSignIn}>Continue with Google</button>
//         </>
//       )}

//       {/* {session && <button onClick={handleSignOut}>Sign out</button>} */}
//     </div>
//   );
// }
