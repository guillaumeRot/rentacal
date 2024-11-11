"use client";

import { Home, Inbox, LogOut } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { singOutAction } from "./auth/auth.action";

// Menu items.
const items = [
  {
    title: "Simulateur",
    url: "/simulateur",
    icon: Home,
  },
  {
    title: "Suggestion",
    url: "/suggestion",
    icon: Inbox,
  },
];

export function RentaCalSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>RentaCal</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <SidebarMenuItem key="logout">
                <SidebarMenuButton
                  onClick={() => {
                    singOutAction();
                  }}
                  asChild
                >
                  <a href="/">
                    <LogOut size={16} className="mr-2" />
                    <span>Logout</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
