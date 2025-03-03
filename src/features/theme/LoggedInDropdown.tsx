"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { PropsWithChildren } from "react";
import { IoIosLogOut } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { signOutAction } from "../auth/auth.action";

export type LoggedInDropdownProps = PropsWithChildren;

export const LoggedInDropdown = (props: LoggedInDropdownProps) => {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>{props.children}</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem asChild>
          <Link
            href="/account"
            className="w-full cursor-pointer focus:bg-white focus:text-blue-700"
          >
            {/* <Home size={16} className="mr-2" /> */}
            <IoPersonOutline size={16} className="mr-2" />
            Mon compte
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            signOutAction();
          }}
          className="w-full cursor-pointer focus:bg-white focus:text-blue-700"
        >
          {/* <LogOut size={16} className="mr-2" /> */}
          <IoIosLogOut size={16} className="mr-2" />
          Déconnexion
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
