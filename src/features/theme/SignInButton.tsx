import { Link } from "lucide-react";
import { signInAction } from "../auth/auth.action";

export const SignInButton = () => {
  return (
    // <Button
    //   variant="secondary"
    //   size="sm"
    //   onClick={() => {
    //     signInAction();
    //   }}
    // >
    //   <LogIn size={16} className="mr-2" />
    //   Sign In
    // </Button>
    <Link
      href="#"
      onClick={() => {
        signInAction();
      }}
      className="py-2.5 px-4 text-center rounded-full duration-150 text-white text-bold text-md bg-blue-900 mb-5 hover:bg-blue-800 hover:ring-3 ring-transparent ring-offset-2 transition"
    >
      Se connecter
    </Link>
  );
};
