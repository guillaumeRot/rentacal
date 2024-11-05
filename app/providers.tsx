"use client";

import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/features/theme/ThemeProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MathJaxContext } from "better-react-mathjax";
import { GoogleAnalytics } from "nextjs-google-analytics";
import { PropsWithChildren } from "react";

const queryClient = new QueryClient();

export type ProvidersProps = PropsWithChildren;

export const Providers = (props: ProvidersProps) => {
  return (
    <>
      <GoogleAnalytics trackPageViews />
      {/* <SessionProvider> */}
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <QueryClientProvider client={queryClient}>
          <Toaster />
          <MathJaxContext>{props.children}</MathJaxContext>
        </QueryClientProvider>
      </ThemeProvider>
      {/* </SessionProvider> */}
    </>
  );
};
