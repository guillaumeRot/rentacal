"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { IoArrowForwardCircle } from "react-icons/io5";
import { z } from "zod";
import { AccessSchema, AccessType } from "../simulateur/simulateur.schema";
import { insertMail } from "./access.action";

export type AccessSectionProps = {
  defaultValues?: AccessType;
};

export const AccessSection = (props: AccessSectionProps) => {
  const router = useRouter();

  const form = useForm<z.infer<typeof AccessSchema>>({
    resolver: zodResolver(AccessSchema),
    defaultValues: props.defaultValues,
  });

  const mutation = useMutation({
    mutationFn: async (values: AccessType) => {
      router.push("/simulateur");
      router.refresh();
      await insertMail(values);
    },
  });

  return (
    <div className="mx-auto w-1/2 px-8 py-4">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(async (values: AccessType) => {
            await mutation.mutateAsync(values);
          })}
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail</FormLabel>
                <div className="flex">
                  <FormControl>
                    {/* <MontantInputMask {...field} /> */}
                    <Input
                      placeholder=""
                      {...field}
                      onChange={(event) => field.onChange(event.target.value)}
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="bg-accent text-accent-foreground mx-auto px-8 py-6 mt-4 rounded-full font-poppins text-base flex hover:bg-[rgba(85,137,195,1)]"
          >
            Accéder au simulateur
            <IoArrowForwardCircle size={25} className="ml-3" />
          </Button>
        </form>
      </Form>
    </div>
  );
};
