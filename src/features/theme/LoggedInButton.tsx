"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSession } from "next-auth/react";
import { GoChevronDown } from "react-icons/go";
import { LoggedInDropdown } from "./LoggedInDropdown";
import { SignInButton } from "../auth/SignInButton";

export const LoggedInButton = () => {
  // const user = await currentUser();
  const session = useSession();
  const name = session.data?.user?.name ?? "";
  console.log("TEST GUI:", session);

  if (!session.data) {
    return <SignInButton />;
  }

  return (
    <LoggedInDropdown>
      {/* <Button variant="outline" size="sm"> */}
      {/* {user.plan === "PREMIUM" ? <Star size={14} className="mr-2" /> : null} */}
      {/* <Avatar className="size-6">
          <AvatarFallback>{user.name?.[0]}</AvatarFallback>
          {user.image ? (
            <AvatarImage
              src={user.image}
              alt={`${user.name ?? "-"}'s profile picture`}
            />
          ) : null}
        </Avatar> */}
      <div className="cursor-pointer flex items-center space-x-4">
        <div className="text-sm">{name}</div>
        <div>
          <Avatar className="size-12">
            <AvatarFallback>{name}</AvatarFallback>
            {session.data?.user?.image ? (
              <AvatarImage
                src={session.data?.user?.image}
                alt={`${session.data?.user?.name ?? "-"}'s profile picture`}
              />
            ) : null}
          </Avatar>
        </div>
        <GoChevronDown />
      </div>
      {/* </Button> */}
    </LoggedInDropdown>
  );
};
