"use client";

import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/features/theme/ThemeProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";

const queryClient = new QueryClient();

export type ProvidersProps = PropsWithChildren;

export const Providers = (props: ProvidersProps) => {
  return (
    // <SessionProvider>
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <QueryClientProvider client={queryClient}>
        <Toaster />
        {/* <SidebarProvider>
          <AppSidebar /> */}
        {/* <main> */}
        {/* <SidebarTrigger /> */}
        {props.children}
        {/* </main>
        </SidebarProvider> */}
      </QueryClientProvider>
    </ThemeProvider>
    // </SessionProvider>
  );
};
