"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSession } from "next-auth/react";
import { GoChevronDown } from "react-icons/go";
import { SignInButton } from "../auth/SignInButton";
import { LoggedInDropdown } from "./LoggedInDropdown";

export const LoggedInButton = () => {
  const session = useSession();
  const name = session.data?.user?.name ?? "";

  if (!session.data) {
    return <SignInButton />;
  }

  return (
    <LoggedInDropdown>
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
    </LoggedInDropdown>
  );
};
