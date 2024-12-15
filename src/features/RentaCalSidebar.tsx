"use client";

import { Home, Inbox, LogOut, Settings } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { singOutAction } from "./auth/auth.action";

export function RentaCalSidebar() {
  const session = useSession();

  return (
    <Sidebar>
      <SidebarHeader className="py-4">
        <Link href="/" className="mx-auto col-start-2">
          <Image
            src="/rentacal_icon_title.png"
            width={150}
            height={150}
            alt="rentacal logo"
          />
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem key="Simulateur">
                <SidebarMenuButton asChild>
                  <a href="/simulateur">
                    <Home />
                    <span>Simulateur</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {session.data?.user && (
          <SidebarGroup>
            <SidebarGroupLabel>Mon compte</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem key="parametres">
                  <SidebarMenuButton asChild>
                    <a href="/parametres">
                      <Settings size={16} className="mr-2" />
                      <span>Paramètres</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
        <SidebarGroup>
          <SidebarGroupLabel>Feedback</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem key="Suggestion">
                <SidebarMenuButton asChild>
                  <a href="/suggestion">
                    <Inbox />
                    <span>Suggestion</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {session.data?.user && (
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem key="logout">
              <SidebarMenuButton
                onClick={() => {
                  console.log("test gui 100");
                  singOutAction();
                }}
                asChild
              >
                <a href="#">
                  <LogOut size={16} className="mr-2" />
                  <span>Déconnexion</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      )}
    </Sidebar>
  );
}
