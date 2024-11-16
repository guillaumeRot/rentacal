"use client";

import { Home, Inbox, LogOut, Settings } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useSession } from "next-auth/react";
import { singOutAction } from "./auth/auth.action";

export function RentaCalSidebar() {
  // const user = useQuery({
  //   queryKey: ["user"],
  //   queryFn: async () => {
  //     console.log("TEST GUI");
  //     const user = await currentUser();
  //     console.log("TEST GUI 2:", user);

  //     // const r = res?.data;
  //     return user;
  //   },
  // });
  // const user = await currentUser();

  // if (!user) {
  //   return <SignInButton />;
  // }

  const session = useSession();
  console.log("TEST GUI 3:", session);

  // if (session.data?.user) {
  //   return <a href="/products">App</a>;
  // } else {
  //   return <SignInButton />;
  // }

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>RentaCal</SidebarGroupLabel>
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
      </SidebarContent>

      {session.data?.user && (
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem key="logout">
              <SidebarMenuButton
                onClick={() => {
                  singOutAction();
                }}
                asChild
              >
                <a href="/">
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
