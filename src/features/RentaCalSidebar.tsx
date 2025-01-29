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
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

export function RentaCalSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const session = useSession();

  async function signOutAction() {
    await signOut({
      redirectTo: "/",
    });
  }

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="py-4">
        <Image
          src="/icon-512x512.png"
          width={200}
          height={200}
          alt="rentacal logo"
        />
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
              <SidebarMenuButton onClick={signOutAction} asChild>
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
