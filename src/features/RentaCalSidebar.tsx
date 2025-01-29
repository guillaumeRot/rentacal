"use client";

import { Home, Inbox, LogOut } from "lucide-react";

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
  useSidebar,
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

  const { open, openMobile } = useSidebar();

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="py-4 mx-auto">
        <Image
          src={
            open || openMobile
              ? "/rentacal_icon_title.png"
              : "/icon-512x512.png"
          }
          width={150}
          height={150}
          alt="rentacal logo"
        />
      </SidebarHeader>
      <SidebarContent
        className={`mt-8
          ${open || openMobile ? "px-8" : ""}`}
      >
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem key="Simulateur">
                <SidebarMenuButton
                  asChild
                  className="[&>svg]:size-6 mx-auto group-data-[collapsible=icon]:size-10!"
                >
                  <a href="/simulateur">
                    <Home />
                    <span>Simulateur</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* {session.data?.user && (
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
        )} */}

        <SidebarGroup>
          <SidebarGroupLabel>Feedback</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem key="Suggestion">
                <SidebarMenuButton
                  asChild
                  className="[&>svg]:size-6 mx-auto group-data-[collapsible=icon]:size-10!"
                >
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
