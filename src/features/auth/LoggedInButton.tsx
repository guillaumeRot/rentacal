import { baseAuth } from "@/auth/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { SignInButton } from "./SignInButton";

export const LoggedInButton = async () => {
  const session = await baseAuth();

  if (!session?.user) {
    return null;
  }

  const user = session.user;

  if (!user) {
    return <SignInButton />;
  }

  return (
    <Button variant="outline" size="sm">
      {/* {user.plan === "PREMIUM" ? <Star size={14} className="mr-2" /> : null} */}
      <Avatar className="size-6">
        <AvatarFallback>{user.name?.[0]}</AvatarFallback>
        {user.image ? (
          <AvatarImage
            src={user.image}
            alt={`${user.name ?? "-"}'s profile picture`}
          />
        ) : null}
      </Avatar>
    </Button>
  );
};
