"use client";

import { Home } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FeedbackSchema, FeedbackType } from "./simulateur/simulateur.schema";

export function RentaCalSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const session = useSession();

  const handleSubmit = async (formData: FeedbackType) => {
    console.log("Feedback submit");
  };

  const { open, openMobile } = useSidebar();

  const [feedbackValues, setFeedbackValues] = useState<FeedbackType>({
    email: "",
    name: "",
    feedback: "",
  });

  const form = useForm<z.infer<typeof FeedbackSchema>>({
    resolver: zodResolver(FeedbackSchema),
    defaultValues: feedbackValues,
  });

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader
        className={`mx-auto
        ${open || openMobile ? "mt-5" : ""}`}
      >
        <Image
          src={
            open || openMobile
              ? "/rentacal_icon_title.png"
              : "/rentacal_icon.png"
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
      </SidebarContent>

      {(open || openMobile) && (
        <SidebarFooter>
          <Card className="p-4">
            <CardTitle className="text-sm">Feedback</CardTitle>
            <CardContent className="text-sm">
              <div>
                Envie de remonter un bug, une idée d'amélioration ?
                <br />
                C'est ici que ça se passe !
              </div>
              <div>
                <Form {...form}>
                  <form
                    className="space-y-3"
                    onSubmit={form.handleSubmit(handleSubmit)}
                  >
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field: { value, onChange } }) => (
                        <FormItem>
                          <FormLabel>Nom</FormLabel>
                          <div className="flex">
                            <FormControl>
                              <Input
                                type="text"
                                placeholder=""
                                className="mr-2"
                                value={value}
                                onChange={(event) => {
                                  const newValue = event.target.value || "";
                                  onChange(newValue);
                                  setFeedbackValues((prev) => ({
                                    ...prev,
                                    name: newValue,
                                  }));
                                }}
                              />
                            </FormControl>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field: { value, onChange } }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <div className="flex">
                            <FormControl>
                              <Input
                                type="text"
                                placeholder=""
                                className="mr-2"
                                value={value}
                                onChange={(event) => {
                                  const newValue = event.target.value || "";
                                  onChange(newValue);
                                  setFeedbackValues((prev) => ({
                                    ...prev,
                                    email: newValue,
                                  }));
                                }}
                              />
                            </FormControl>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="feedback"
                      render={({ field: { value, onChange } }) => (
                        <FormItem>
                          <FormLabel>Feedback</FormLabel>
                          <div className="flex">
                            <FormControl>
                              <Textarea
                                placeholder=""
                                className="mr-2"
                                value={value}
                                onChange={(event) => {
                                  const newValue = event.target.value || "";
                                  onChange(newValue);
                                  setFeedbackValues((prev) => ({
                                    ...prev,
                                    feedback: newValue,
                                  }));
                                }}
                              />
                            </FormControl>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      className="cursor-pointer mx-auto block px-6 py-2 rounded-full text-sm text-semibold bg-blue-700 hover:bg-blue-600"
                      type="submit"
                    >
                      <span className="text-white">Envoyer</span>
                    </Button>
                  </form>
                </Form>
              </div>
            </CardContent>
          </Card>
        </SidebarFooter>
      )}
    </Sidebar>
  );
}
